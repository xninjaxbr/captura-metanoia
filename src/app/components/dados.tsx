"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toPhone } from "../util/toPhone";
import { toDate } from "../util/toDate";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner"
import { Loader2Icon } from "lucide-react";


export default function Dados(){

  

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [indicacao, setIndicacao] = useState("E");
  const [sexo, setSexo] = useState("M");
  const [politica, setPolitica] = useState(false);
  const [campo, setCampo] = useState(false);
  const [loading, setLoading] = useState(false);

  
  useEffect(()=> {
    if(!nome || !email || whatsapp.length < 15){
      setCampo(true)
    }else{
      setCampo(false)
    }
  }, [email, nome, whatsapp])

  const handleSexoRadioChange = (event: string) => {
    setSexo(event);
};
  
const handleIndicacaoRadioChange = (event: string) => {
    setIndicacao(event);
};

function apagaTudo(){
  setNome("")
  setEmail("")
  setWhatsapp("")
  setTelefone("")
  setDataNascimento("")
  setIndicacao("E")
  setSexo("M")
  setPolitica(false)
  setCampo(false)
  setPolitica(false)
}

async function inscreverSe(){
  setLoading(true)
    
  const res = await fetch(
      `api/ws/cadastro`,
      {
        method: 'POST',
        body: JSON.stringify({
          nome,
          email,
          whatsapp,
          dataNascimento,
          indicacao, 
          sexo, 
          telefone
         }),    
      },
  )
  
  const data = await res.json()

  if(data.success){
    toast.success(data.message , {
      richColors: true,
      classNames: {
        success: '!bg-blue-600 !border-blue-800 !text-blue-100'
      }
    })
    apagaTudo()
  }else{
    toast.error(`Erro: ${data.message} - Tente novamento mais tarde.`, {
      richColors: true, 
      classNames: {
        error: '!bg-red-600 !border-red-800 !text-red-100'
      }
    })
  }
  setLoading(false)
}


    return (
        <div className="flex flex-col gap-6 justify-center items-center bg-white pb-20 shadow ">
            
            {/* <Image src={foto} className='w-1/2 mask-x-from-80% mask-x-to-90% rounded-lg' alt='Stanley' width={200} height={200} /> */}
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/kUzp1MxtvCQ?rel=0&modestbranding=1&controls=1&disablekb=1&fs=0" 
              title="YouTube video player"  
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
            <div className="grid gap-4 mt-2 bg-white shadow my-6 rounded-sm p-4">
        <div className="text-2xl text-center text-black font-bold" id="inscreva">
          Ficha de Inscrição
        </div>
        <div className="text-gray-500 text-center">
          Inscreva para receber conteúdo exclusivo e mentoria personalizada da
          nossa equipe.
        </div>
        <div className="grid gap-1">
          <Label htmlFor="nome">Nome completo*</Label>
          <Input
            id="nome"
            name="nome"
            placeholder="Nome completo"
            value={nome}
            onChange={(v) => {
              setNome(v.target.value);
            }}
            className="bg-white text-[#0b2782]"
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@exemplo.com"
            value={email}
            onChange={(v) => {
              setEmail(v.target.value);
            }}
            className="bg-white text-[#0b2782]"
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="whatsapp">Whatsapp*</Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            placeholder="(xx) xxxxx-xxxx"
            value={toPhone(whatsapp)}
            onChange={(v) => {
              setWhatsapp(v.target.value);
            }}
            className="bg-white text-[#0b2782]"
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            name="telefone"
            placeholder="(xx)xxxxx-xxxx"
            value={toPhone(telefone)}
            onChange={(v) => {
              setTelefone(v.target.value);
            }}
            className="bg-white text-[#0b2782]"
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="dataNascimento">Data de Nascimento</Label>
          <Input
            id="dataNascimento"
            name="dataNascimento"
            placeholder="DD/MM/AAAA"
            value={toDate(dataNascimento)}
            onChange={(v) => {
              setDataNascimento(v.target.value);
            }}
            className="bg-white text-[#0b2782]"
          />
        </div>
        <div id="radios" className="flex justify-between gap-6 flex-col md:flex-row">
          <div className="grid gap-1">
            <Label htmlFor="sexo">Sexo</Label>
            <RadioGroup value={sexo} onValueChange={handleSexoRadioChange} defaultValue={sexo} className="flex" >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="M" id="M"  />
                <Label htmlFor="M">Masculino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="F" id="F" />
                <Label htmlFor="F">Feminino</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="h-8 w-0.5 bg-gray-500 rounded-md hidden md:block" />
          <div className="grid gap-1">
            <Label htmlFor="indicacao">Indicação</Label>
            <RadioGroup value={indicacao} onValueChange={handleIndicacaoRadioChange} defaultValue={indicacao} className="flex">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="E" id="E"  />
                <Label htmlFor="E">Escola</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="I" id="I" />
                <Label htmlFor="I">Igreja</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="C" id="C" />
                <Label htmlFor="C">Coorporação</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
          <div className="flex items-center gap-2 pt-6">
            <Checkbox checked={politica} onCheckedChange={()=> {setPolitica(!politica)}} className="border-black" id="termo" /> <Label htmlFor="termo">Li e concordo com a Política de Privacidade e os Termos de Uso deste site.</Label>
          </div>
          <div>
            <p data-hide={politica === false || campo === false} className="font-bold pt-6 text-red-500 data-[hide=true]:hidden">* Os campos obrigatórios não foram preenchidos</p>
          </div>
      </div>
      <div className="mt-5 w-full flex justify-end mr-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
            onClick={() => {
              if(politica === false || campo === true){
                return
              }else{
                inscreverSe()
              }

            }}
            data-disabled={politica === false || campo === true || loading === true} 
            className="bg-[#0b2782] hover:bg-[#07174d] data-[disabled=true]:opacity-30 data-[disabled=true]:cursor-not-allowed cursor-pointer"  
            type="submit">
              <Loader2Icon data-loading={loading} className="animate-spin data-[loading=false]:hidden" />
              Realizar Inscrição
            </Button>
          </TooltipTrigger>
          <TooltipContent hidden={politica === true}>
            <p>Você deve concordar com a Política de Privacidade e os Termos de Uso </p>
          </TooltipContent>
        </Tooltip>
      </div> 

           
        </div>
    )
}