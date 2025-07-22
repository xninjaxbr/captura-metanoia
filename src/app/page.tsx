import Contato from "./components/contato";
import Dados from "./components/dados";
import { Inscreva } from "./components/increva";
import NavBar from "./components/navbar";
import Rodape from "./components/rodape";
import Sobre from "./components/sobre";
import Top from "./components/top";


export default function Home() {
  return (
    <main >
      <div className="mx-auto sm:px-12 sm:pb-20 ">
        <Top />
        <NavBar />
        <Dados />
        <Sobre />
        <Contato />
        <Inscreva />
      </div>
        <Rodape />
    </main>
  );
}
