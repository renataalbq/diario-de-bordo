import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/menu";
import useListarAtividades from "../../services/atividades/listarAtidades";
import { IAtividade } from "../../model/IAtividade";
import { Card } from "../../components/card";
import { Footer } from "../../components/footer";

const ListagemAtividade = () => {
  const { atividades } = useListarAtividades();
  const navigate = useNavigate();

  const handleDetalhe = (atividade: any) => {
    navigate(`/detalhe-atividade/${atividade.id}`, { state: { atividade } });
  };

  return (
    <>
      <Menu />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {atividades?.content?.map((atividade: IAtividade) => (
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
      </div>
      <Footer />
    </>
  );
};

export default ListagemAtividade;
