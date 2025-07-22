import Image from 'next/image'
import capa from '../assets/capa.webp'
import { BrainCircuit } from 'lucide-react'
// import { Inscreva } from './increva'0

export default function Top(){
    
    
    return (
        <div className="w-full relative sm:pb-20 pb-8" >
            <Image src={capa} fill alt='Capa' className='-z-50 rounded-t-md h-52 absolute w-full' priority /> 
            <div className='w-full bg-blue-950 opacity-50 absolute rounded-md h-full -z-40' />
            <div className='w-full rounded-md bg-blue-950 absolute h-full left-0 mask-r-from-40% p-4 flex flex-col justify-center items-center -z-30' />

            <div>
                <div className='sm:text-5xl text-3xl flex justify-center items-center sm:gap-6 gap-2'>
                    <BrainCircuit className='text-blue-800 sm:w-10 sm:h-10 h-8 w-8' />
                    <p className='inline text-white font-bold'>Projeto Metanoia</p>
                </div>
                <p className=' text-gray-50 font-bold text-center py-4 sm:text-3xl text-xl'>Transformando vidas e comunidades</p>
                <p className='text-gray-200 text-md text-center sm:pt-3 pt-2'>Transformando mentalidades e ajudando jovens de periferia a construírem um futuro melhor através de educação, apoio e oportunidades.</p>
            </div>
            
        </div>
    )
}