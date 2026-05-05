import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

// Creamos una configuración que obliga a Prisma a usar el motor de librería estándar
const prismaClientOptions = {
  log: ["query", "error", "warn"],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
};

export const prisma =
  globalForPrisma.prisma || new PrismaClient(prismaClientOptions);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
