import { NextRequest, NextResponse } from "next/server";
import prisma from "@/util/db";
import { auth } from "../../../../../auth";
import { z } from "zod";


export async function POST(request: NextRequest){

    const session = await auth()

    if (!session) {
        return NextResponse.json(
         { success: false, message: 'Usuário não autorizado' },
         { status: 401 },
        )
    }


     const reqSchema = z.object({
            tipo: z.enum(['n', 'w', 'e']),
        })
    
        const body = await request.json()

        const reqBody = reqSchema.safeParse(body)

        if (!reqBody.success) {
        return NextResponse.json(
         { success: false, message: reqBody.error },
         { status: 400 },
        )
    }
    
    try{

        const todos = await prisma.cliente.findMany({
            select:{
                nome: reqBody.data.tipo === 'n',
                whatsapp: reqBody.data.tipo === 'w', 
                email: reqBody.data.tipo === 'e'
            }
        })
        
         return NextResponse.json(
      {
        success: true,
        data: todos.map((i) => {
            switch (reqBody.data.tipo) {
                case 'n':
                    return i.nome
                case 'e':
                    return i.email
                case 'w':
                    return i.whatsapp
                default:
                    break;
            }
        }),  
      },
      { status: 200 }, // OK
    )


    }catch(error){
         if (error instanceof Error) {
      if (error.name === 'PrismaClientKnownRequestError') {
        return NextResponse.json(
          { success: false, message: 'Erro ao acessar o banco de dados.' },
          { status: 500 },
        )
      }
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 },
      )
    }
    return NextResponse.json(
      { success: false, message: 'Erro inesperado.' },
      { status: 500 },
    )
    }





}