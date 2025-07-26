import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
neonConfig.webSocketConstructor = ws;
// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
neonConfig.poolQueryViaFetch = true
// Type definitions
declare global {
  var prisma: PrismaClient | undefined
}
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaNeon({ connectionString });
const prisma = global.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV === 'development') global.prisma = prisma;
export default prisma;

// import { neonConfig } from '@neondatabase/serverless'
// import { PrismaNeon } from '@prisma/adapter-neon'
// import { PrismaClient } from '@prisma/client'
// import ws from 'ws'

// const prismaClientSingleton = () => {
//   neonConfig.webSocketConstructor = ws
//   const connectionString = process.env.DATABASE_URL

//   // const pool = new Pool({ connectionString })
//   const adapter = new PrismaNeon({ connectionString })
// const prisma = new PrismaClient({ adapter })
//   return prisma
// }

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>
// } & typeof global

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
