"use client";


export function Inscreva() {


  return (
    <div >
      <div>
        <div className="text-2xl my-8 text-[#677DD0] font-bold">Dados</div>
      </div>

      <div className='text-gray-800 flex flex-col justify-center items-center bg-white shadow my-6 rounded-sm p-4'>
        <span className='font-bold text-xl'> Transformando Mentalidades</span> <span className='font-bold text-center text-[#677DD0] block'> Construindo Futuros </span>
        <div className='grid grid-cols-2 pt-8 gap-4 lg:gap-20 '>
            <div>
                <p className='font-bold text-3xl text-[#677DD0] '>500+</p>
                <p className='text-gray-500' >Jovens e adultos Inpactados</p>
            </div>
            <div>
                <p className='font-bold text-3xl text-[#677DD0] '>1500+</p>
                <p className='text-gray-500'>Visitas</p>
            </div>
            <div>
                <p className='font-bold text-3xl text-[#677DD0] '>30+</p>
                <p className='text-gray-500'>Palestras Realizadas</p>
            </div>
            <div>
                <p className='font-bold text-3xl text-[#677DD0] '>5</p>
                <p className='text-gray-500'>Comunidades</p>
            </div>
        </div>
      </div>

      {/* <div className="grid gap-4 mt-2 bg-white shadow my-6 rounded-sm p-4">
        <div className="text-2xl text-center text-black font-bold">
          Ficha de Inscrição
        </div>
        <div className="text-gray-500 text-center">
          Inscreva para receber conteúdo exclusivo e mentoria personalizada da
          nossa equipe.
        </div>
        <div className="grid gap-1">
          <Label htmlFor="nome">Nome completo</Label>
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
          <Label htmlFor="email">Email</Label>
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
          <Label htmlFor="whatsapp">Whatsapp</Label>
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
        <div id="radios" className="flex justify-between ">
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
          <div className="h-8 w-0.5 bg-gray-500 rounded-md" />
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
      </div>
      <div className="mt-5 w-full flex justify-end">
        <Button className="bg-[#0b2782] hover:bg-[#07174d]" type="submit">Realizar Inscrição</Button>
      </div> */}
    </div>
  );
}
