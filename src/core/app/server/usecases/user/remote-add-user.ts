import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { HttpStatusCodeEnum } from '~/core/app/server/protocols/http';
import { RemoteAddUserMetadata } from '~/core/app/server/usecases/user-metadata';
import {
  AddUser,
  UserMetadataCategoryEnum
} from '~/core/domain/server/usecases';
import { PasswordUtil } from '~/core/infra';
import { JWT_SECRET } from '~/core/infra/config/env';

export class RemoteAddUser implements AddUser {
  constructor(private readonly prismaClient: PrismaClient) {}

  async run(params: AddUser.Params): Promise<AddUser.Response> {
    const { email, name, password } = params;
    const hashedPassword = await PasswordUtil.hash({
      password,
      salt: 10
    });
    const userRegistered = await this.prismaClient.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    });

    if (!userRegistered) {
      return { code: HttpStatusCodeEnum.BAD_REQUEST };
    }
    const { id } = userRegistered;
    const tokenActivateAccount = jwt.sign({ id }, JWT_SECRET, {
      expiresIn: '30m'
    });
    const dateNowWith30Minutes = new Date().setMinutes(
      new Date().getMinutes() + 30
    );
    const remoteAddUserMetadata = new RemoteAddUserMetadata(this.prismaClient);

    await remoteAddUserMetadata.run({
      category: UserMetadataCategoryEnum.ACTIVATE_ACCOUNT,
      code: tokenActivateAccount,
      expiresAt: new Date(dateNowWith30Minutes),
      userId: id
    });

    return {
      code: HttpStatusCodeEnum.CREATED
    };
  }
}

export namespace RemoteAddUser {
  export type Params = AddUser.Params;
  export type Response = AddUser.Response;
}
