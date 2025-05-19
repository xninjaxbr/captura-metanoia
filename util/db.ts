import { neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'
import ws from 'ws'

const prismaClientSingleton = () => {
  neonConfig.webSocketConstructor = ws
  const connectionString = process.env.DATABASE_URL

  // const pool = new Pool({ connectionString })
  const adapter = new PrismaNeon({ connectionString })
const prisma = new PrismaClient({ adapter })
  return prisma
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
