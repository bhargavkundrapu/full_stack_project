import prisma from '../config/prisma';

export const checkHealth = async () => {
  // Check DB status using Prisma
  await prisma.$queryRaw`SELECT 1`;
  return {
    status: 'ok',
    database: 'connected',
  };
};
