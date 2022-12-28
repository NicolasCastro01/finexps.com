import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { apiLogger, PasswordUtil } from '~/infra';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = await PasswordUtil.hash({
      password,
      salt: 10
    });
    const prisma = new PrismaClient();
    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    });

    res.status(201).end();
  } catch (error) {
    apiLogger({
      params: req.body,
      description: 'Error on register user',
      category: 'REGISTER_USER'
    });

    res.status(400).end();
  }
}
