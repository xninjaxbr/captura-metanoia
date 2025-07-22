import { NextRequest, NextResponse } from "next/server";
import prisma from "@/util/db";
import { auth } from "../../../../../auth";


export async function GET(request: NextRequest){

    const session = await auth()


    if (session) {
        return NextResponse.json(
         { success: false, message: 'Usuário não autorizado' },
         { status: 401 },
        )
    }
    
    try{

    const searchParams = request.nextUrl.searchParams
    

    const page = parseInt(searchParams.get('page') || '1') // Página atual, default 1
    const limit = parseInt(searchParams.get('limit') || '20') // Limite de resultados por página, default 10

    const skip = (page - 1) * limit // Calcular quantos registros pular

    const totalRecords = await prisma.cliente.count()

    const getAll = await prisma.cliente.findMany({skip, take: limit})

    const totalPages = Math.ceil(totalRecords / limit)




         return NextResponse.json(
      {
        success: true,
        data: getAll,
        pagination: {
          currentPage: page,
          totalPages,
          totalRecords,
        },
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