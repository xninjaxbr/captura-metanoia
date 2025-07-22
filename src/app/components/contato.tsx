import { ChevronsRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Contato(){
    return (
        <div className="text-gray-500 mt-20" id="contato">
            <ChevronsRight className="inline"/>
            <span className="inline pt-0.5 font-bold">Contato</span>
            <div className="pt-10 font-bold text-2xl text-[#677DD0] pb-8">
                Entre em contato
            </div>
            <div className="bg-white flex flex-col justify-center items-center shadow">
                <div className="text-center text-3xl font-bold text-black">Fale Conosco</div>
                <div className="text-center text-sm">Tem dúvidas, sugestões ou quer participar <span className="block sm:inline"> do Projeto Metanoia? Fale conosco.</span></div>
                <div className="py-8 flex flex-col gap-4">
                    <Link target="_blank" href="mailto:contato@exemplo.com?subject=Dúvida sobre Metanoia&body=Entrei em contato através da página do Metanoia e gostaria de mais informações..." className="flex gap-2 items-center"><span className="bg-[#3A74FF] rounded-full p-1.5"><Mail className="text-white"/></span>contato@exemplo.com</Link>
                    <Link target="_blank" href="https://wa.me/5561999999999?text=Olá...%20Estou%20entrando%20em%20contato%20através%20do%20Site%20Metanoia..." className="flex gap-2 items-center"><span className="bg-[#3A74FF] rounded-full p-1.5"><Phone className="text-white"/></span>(61) 99999-9999</Link>
                    <div className="flex gap-2 items-center"><span className="bg-[#3A74FF] rounded-full p-1.5"><MapPin className="text-white"/></span>Brasília - DF</div>
                </div>
            </div>
            
        </div>
    )
}