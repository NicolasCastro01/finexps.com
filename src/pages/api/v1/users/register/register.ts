import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatusCodeEnum } from '~/app/server/protocols/http';
import { RemoteAddUser } from '~/app/server/usecases/user';
import { apiLogger } from '~/infra';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, name, password } = req.body;
    const register = new RemoteAddUser(new PrismaClient());
    register.run({
      email,
      name,
      password
    });

    res.status(HttpStatusCodeEnum.CREATED).end();
  } catch (error) {
    apiLogger({
      params: req.body,
      description: 'Error on register user',
      category: 'REGISTER_USER'
    });

    res.status(HttpStatusCodeEnum.BAD_REQUEST).end();
  }
}
