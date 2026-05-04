import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

// IMPORTANTE: No añadas nada dentro de PrismaClient()
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma