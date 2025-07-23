"use client"

import { useEffect, useState } from "react"
import LogoutButton from "./sair"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import moment from 'moment';
import { Pagina } from "./pagination";

interface Idata{
createAt: string
dataNascimento: string
email: string
id: string
indicacao: "E" | "I" | "C"
nome: string
sexo: "M" | "F"
telefone: string
updateAt: string
whatsapp: string
}

export interface Ipagination{
  currentPage: number
  totalPages: number
  totalRecords: number
        
}
 
export default function Lista() {
//   const session = await auth()
//   if (!session) return redirect('api/auth/signin')
  
    const [data, setData] = useState<Idata[]>()
    const [pagination, setPagination] = useState<Ipagination>()
    const [page, setPage] = useState(1)
    

    useEffect(()=> {
        async function fetchData(){

            const res = await fetch(
                `api/ws/findAll?page=${page}`,
                {
                    method: 'GET',
                },
            )
            
            const data = await res.json()
            setData(data.data)
            setPagination(data.pagination)
            
        }
        fetchData()
  
    }, [page])
 
  return (
    <div className="px-10 pt-32">
      <LogoutButton />

      <p className="flex justify-center mb-6 font-bold text-2xl">Metanoia</p>
      <Table>
        <TableCaption>Lista de inscritos no Metanoia</TableCaption>
        <TableHeader>
        <TableRow className="border-2 border-gray-800">
          <TableHead className="border-r border-gray-400" >Nome</TableHead>
          <TableHead className="border-r border-gray-400">Telefone</TableHead>
          <TableHead className="border-r border-gray-400">Whatsapp</TableHead >
          <TableHead className="border-r border-gray-400">Email</TableHead>
          <TableHead className="border-r border-gray-400">Data de Nascimento</TableHead >
          <TableHead className="border-r border-gray-400">Sexo</TableHead >
          <TableHead className="border-r border-gray-400">Indicação</TableHead >
          <TableHead >Data da Inscrição</TableHead >
        </TableRow>
      </TableHeader>
      <TableBody className="border-2 border-gray-800">
        {data?.map((item) => (
          <TableRow key={item.id} className="odd:bg-gray-300 even:bg-gray-200 hover:border-gray-900 hover:border-2 ">
            <TableCell className="border-r border-gray-400">{item.nome}</TableCell>
            <TableCell className="border-r border-gray-400">{item.telefone}</TableCell>
            <TableCell className="border-r border-gray-400">{item.whatsapp}</TableCell>
            <TableCell className="border-r border-gray-400">{item.email}</TableCell>
            <TableCell className="border-r border-gray-400">{moment(item.dataNascimento).format('DD/MM/YYYY')}</TableCell>
            <TableCell className="border-r border-gray-400">{item.sexo}</TableCell>
            <TableCell className="border-r border-gray-400">{item.indicacao}</TableCell>
            <TableCell >{moment(item.createAt).format('DD/MM/YYYY')}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-gray-800 text-white hover:bg-gray-700">
          <TableCell colSpan={7}>Total de inscritos</TableCell>
          <TableCell className="text-right">{data?.length}</TableCell>
        </TableRow>
      </TableFooter>
      </Table>
      <Pagina page={page} setPage={setPage} total={pagination?.totalPages}/>
    </div>
  )
}