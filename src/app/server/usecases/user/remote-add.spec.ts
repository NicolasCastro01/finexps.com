import { RemoteAddUser } from '~/app/server/usecases/user/remote-add';

const defaultParams = {
  email: 'test@test.com',
  name: 'test',
  password: 'test'
};

const defaultResponsePrisma = {
  id: 1,
  email: 'test@test.com',
  name: 'test',
  password: 'test',
  createdAt: new Date(),
  updatedAt: new Date()
};

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn(() => {
      return {
        user: {
          create: jest.fn(() => {
            return defaultResponsePrisma;
          })
        }
      };
    })
  };
});

const PrismaClient = jest.requireMock('@prisma/client').PrismaClient;

const makeSut = () => {
  const prismaClient = new PrismaClient();
  const sut = new RemoteAddUser(prismaClient);
  return {
    sut,
    prismaClient
  };
};

describe('Remote add user', () => {
  it('should create a user', async () => {
    const { sut } = makeSut();
    const response = await sut.run(defaultParams);
    expect(response.code).toBe(201);
  });
});
