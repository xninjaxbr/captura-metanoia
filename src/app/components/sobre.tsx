import { ChevronsRight } from "lucide-react";

export default function Sobre(){
    return (
        <div className="text-gray-500" id="sobre">
            <ChevronsRight className="inline"/>
            <span className="inline pt-0.5 font-bold  ">Sobre</span>
            <div className="pt-10 font-bold text-2xl text-[#677DD0] pb-8">
                Nossa Missão e Valores
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="text-center text-gray-400 bg-white p-2 rounded-md shadow">
                    <span className="block font-bold pb-3 text-black text-lg">Missão</span>
                    Transformar a mentalidade de jovens de periferia, incentivando-os a sonhar e construir um futuro melhor através da educação e do desenvolvimento pessoal.
                </div>
                <div className="text-center text-gray-400 bg-white p-2 rounded-md shadow">
                    <span className="block font-bold pb-3 text-black text-lg">Visão</span>
                    Ser referência em projetos de transformação social, criando uma rede de apoio que alcance jovens e adultos em todas as comunidades periféricas do Brasil.
                </div>
                <div  className="text-center text-gray-400 bg-white p-2 rounded-md shadow">
                    <span className="block font-bold pb-3 text-black text-lg">Valores</span>
                    Empatia, Respeito, Educação, Colaboração, Inovação, Inclusão e Transformação Social.
                </div>
            </div>

        </div>
    )
}