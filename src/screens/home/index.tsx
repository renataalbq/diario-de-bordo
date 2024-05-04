import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";
import { Card } from "../../components/card";
import useListarAtividades from "../../services/atividades/listarAtidades";
import { IAtividade } from "../../model/IAtividade";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  const { atividades } = useListarAtividades();

  const handleDetalhe = (atividade: any) => {
      navigate(`/detalhe-atividade/${atividade.id}`, {state: { atividade}})
  }
  return (
    <>
      <Menu />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-md font-bold tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
            Últimas atividades
          </h2>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {atividades &&
            atividades?.content
              .slice(0, 6)
              .map((atividade: IAtividade) => (
                <Card
                  key={atividade.id}
                  tipo={atividade.atividadeTipo}
                  titulo={atividade.titulo}
                  conteudo={atividade.descricaoAtividade}
                  atividade={atividade}
                  navigateDetalhe={handleDetalhe}
                />
              ))}
        </div>
        <div className="text-center">
          <a
            href="/listagem-atividade"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-500 focus:shadow-outline focus:outline-none"
          >
            Ver mais
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
