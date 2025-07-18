import { NextRequest, NextResponse } from "next/server";
import prisma from "@/util/db";
import { z } from "zod";


export async function POST(req: NextRequest){

    const reqSchema = z.object({
        nome: z.string(),
        email: z.string(),
        whatsapp: z.string(),
        dataNascimento: z.string().optional(),
        indicacao: z.enum(['E', 'I', 'C']).optional(), 
        sexo: z.enum(['M', 'F']).optional(), 
        telefone: z.string().optional()
    })

    

    const body = await req.json()

    const reqBody = reqSchema.safeParse(body)

    if (!reqBody.success) {
        return NextResponse.json(
         { success: false, message: reqBody.error },
         { status: 400 },
        )
    }

    try{
        const createPrisma = await prisma.cliente.create({data: reqBody.data})

        if(!createPrisma){
            return NextResponse.json(
                { success: false, message: 'Erro ao envir as informações.' },
                { status: 404 },
            )
        }


         return NextResponse.json(
                { success: true, message: 'Formulário enviado com sucesso.' },
                { status: 201 },
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