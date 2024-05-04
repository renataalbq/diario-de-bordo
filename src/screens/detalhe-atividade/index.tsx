import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "../../components/menu";
import { tipo_format } from "../../utils/tipo_format";
import { date_format } from "../../utils/date_format";
import useDeletarAtividade from "../../services/atividades/deletarAtividade";
import { BiTrash } from "react-icons/bi";


const DetalheAtividade = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { atividade } = location.state;
    const {deletarAtividade, error} = useDeletarAtividade()

    const handleDelete = async () => {
      await deletarAtividade(atividade.id)
      if (!error) {
        navigate('/listagem-atividade');
      }
    }

    return (
        <>
        <Menu />
        <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col mt-10">
          <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
            <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
              <h2 className="mb-5 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
               {atividade.titulo}
              </h2>
              <h3>{tipo_format(atividade.atividadeTipo)}</h3>
              <h4>{date_format(atividade.dataAtividade)}</h4>
              <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
                {atividade.descricaoAtividade}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span>Escrito por: {atividade.usuario.login}</span>

                <button onClick={handleDelete} className="p-2 text-white bg-red-500 rounded hover:bg-red-700">
                  <BiTrash />
                </button>
              </div>
            </div>
          </div>
          <div className="inset-y-0 top-0 right-2 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
        </>
      );
}

export default DetalheAtividade;