import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;
console.log("DATABASE_URL:", process.env.DATABASE_URL?.slice(0, 30));

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // Forzamos a Prisma a NO usar el motor de aceleración (Data Proxy)
    // y a usar la URL de la variable de entorno directamente.
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
