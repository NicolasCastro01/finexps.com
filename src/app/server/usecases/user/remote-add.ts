import { PrismaClient } from '@prisma/client';
import { HttpStatusCodeEnum } from '~/app/server/protocols/http';
import { AddUser } from '~/domain/server/usecases';
import { PasswordUtil } from '~/infra';

export class RemoteAddUser implements AddUser {
  constructor(private readonly prismaClient: PrismaClient) {}

  async run(params: AddUser.Params): Promise<AddUser.Response> {
    const { email, name, password } = params;
    const hashedPassword = await PasswordUtil.hash({
      password,
      salt: 10
    });
    await this.prismaClient.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
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
