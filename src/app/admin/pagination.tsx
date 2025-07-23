import {
  Pagination,
  PaginationContent,
//   PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Dispatch, SetStateAction } from "react"

interface Ipagina{
    total?: number
    page: number
    setPage: Dispatch<SetStateAction<number>>
}

export function Pagina({page, total = 0, setPage} : Ipagina) {

    function anterior(){
        if(page <= 1){
            return
        }
        setPage(page - 1)
                
    }

    function proximo(){
        if(page >= total){
            return
        }
        setPage(page + 1)

    }

  
    return (
    <Pagination className="my-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={anterior} className="cursor-pointer"/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink data-hiden={(page - 1) <= 0} className="data-[hiden=true]:hidden" >{page - 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive className="bg-gray-300 hover:bg-gray-400">
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink data-hiden={(page) >=  total} className="data-[hiden=true]:hidden" >{page + 1}</PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext onClick={proximo} className="cursor-pointer" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
