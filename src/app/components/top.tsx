import Image from 'next/image'
import capa from '../assets/capa.webp'
import { BrainCircuit } from 'lucide-react'
// import { Inscreva } from './increva'0

export default function Top(){
    
    
    return (
        <div className="w-full relative h-52" >
            <Image src={capa} width={1400} height={800} alt='Capa' className='-z-50 rounded-t-md h-52 absolute w-full ' /> 
            <div className='w-full bg-blue-950 opacity-50 absolute rounded-md h-full -z-40' />
            <div className='w-full rounded-md bg-blue-950 absolute h-full left-0 mask-r-from-40% p-4 flex flex-col justify-center items-center -z-30' />

            <div>
                <div className='text-5xl flex justify-center items-center gap-6'>
                    <BrainCircuit className='text-blue-800 w-10 h-10' />
                    <p className='inline text-white font-bold'>Projeto Metanoia</p>
                </div>
                <p className=' text-gray-50 font-bold text-center py-4 text-3xl'>Transformando vidas e comunidades</p>
                <p className='text-gray-200 text-md text-center pt-3'>Transformando mentalidades e ajudando jovens de periferia a construírem um futuro melhor através de educação, apoio e oportunidades.</p>
            </div>
            
        </div>
    )
}