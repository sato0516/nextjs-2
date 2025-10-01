import { PrismaClient } from '@/generated/prisma'

//グローバルスコープでPrismaインスタンスを保持できる場所を作る
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}
//Prismaインスタンスがあればつかう
export const prisma = globalForPrisma.prisma ?? new PrismaClient()
//開発環境でのみ使用
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma