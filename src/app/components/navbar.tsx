import Link from "next/link";

export default function NavBar(){
    return (
        <div className="flex gap-4 py-2 font-bold rounded-b-md bg-[#3B72FF] text-white justify-between px-10">
            <Link href="#">Início</Link>
            <Link href="#sobre">Sobre o Projeto</Link>
            <Link href="#contato">Contato</Link>
            <Link href="#inscreva">Inscreva-se</Link>
        </div>
    )
}