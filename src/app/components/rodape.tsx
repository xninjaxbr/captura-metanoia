import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

export default function Rodape(){
    
    
    return (
        <div className="flex justify-center w-full h-52" >
            <div className='w-full rounded-md bg-[#010E38]  h-full left-0 mask-t-from-90% p-4 flex justify-between gap-8'>                
                <div className="w-1/3 max-w-sm">
                    <p className='inline text-white text-sm font-bold'>Projeto Metanoia</p>
                    <p className="text-[#5895FF] text-xs  py-2">Transformando mentalidades e construindo futuros melhores para jovens de periferia.</p>
                    <div className="pt-4 flex gap-3">
                        <Link href="https://instagram.com/" target="_blank" className="bg-[#5895FF] p-1.5 rounded-full text-white"><Instagram /></Link>
                        <Link href="https://www.facebook.com/?locale=pt_BR" target="_blank"  className="bg-[#5895FF] p-1.5 rounded-full text-white"><Facebook /></Link>
                        <Link href="https://www.youtube.com/" target="_blank"  className="bg-[#5895FF] p-1.5 rounded-full text-white"><Youtube /></Link>
                    </div>
                </div>
                <div className="w-1/3 max-w-sm">
                    <p className='inline text-white text-sm font-bold'>Links Rápidos</p>
                    <div className="pt-2 flex flex-col text-sm">
                        <Link href="#" target="_self" className="text-[#5895FF]   ">Início</Link>
                        <Link href="#" target="_self" className="text-[#5895FF]   ">Sobre o Projeto</Link>
                        <Link href="#" target="_self" className="text-[#5895FF]   ">Contato</Link>
                        <Link href="#" target="_self" className="text-[#5895FF]   ">Inscreva-se</Link>
                    </div>
                </div>
                <div className="w-1/3 max-w-sm">
                    <p className='inline text-white text-sm font-bold'>Contato</p>
                    <div className="pt-2 flex flex-col gap-1.5 text-[#5895FF] text-sm">
                        <Link target="_blank" href="mailto:contato@exemplo.com?subject=Dúvida sobre Metanoia&body=Entrei em contato através da página do Metanoia e gostaria de mais informações..." className="flex gap-2 items-center"><span className="bg-[#3A74FF] rounded-full p-1.5"><Mail className="text-white w-4 h-4"/></span>contato@exemplo.com</Link>
                        <Link target="_blank" href="https://wa.me/5561999999999?text=Olá...%20Estou%20entrando%20em%20contato%20através%20do%20Site%20Metanoia..." className="flex gap-2 items-center"><span className="bg-[#3A74FF] rounded-full p-1.5"><Phone className="text-white w-4 h-4"/></span>(61) 99999-9999</Link>
                        <div className="flex gap-2 items-center "><span className="bg-[#3A74FF] rounded-full p-1.5"><MapPin className="text-white w-4 h-4"/></span>Brasília - DF</div>  
                    </div>
                </div>
            </div>
        </div>
    )
}