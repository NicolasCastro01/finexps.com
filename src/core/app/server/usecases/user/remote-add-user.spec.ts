import { RemoteAddUser } from './remote-add-user';

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

jest.mock('~/core/app/server/usecases/user-metadata', () => {
  return {
    RemoteAddUserMetadata: jest.fn(() => {
      return {
        run: jest.fn(() => {
          return {
            code: 201
          };
        })
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

  it('should return empty object if user already exists', async () => {
    const { sut, prismaClient } = makeSut();
    prismaClient.user.create = jest.fn(() => {
      return null;
    });
    const response = await sut.run(defaultParams);
    expect(response.code).toBe(400);
  });
});
