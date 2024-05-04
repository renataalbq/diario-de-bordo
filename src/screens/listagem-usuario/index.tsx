import { BiEdit, BiTrash } from "react-icons/bi";
import { Menu } from "../../components/menu"
import { IUsuario } from "../../model/IUsuario";
import useListarUsuarios from "../../services/usuarios/listarUsuarios";
import useDeletarUsuario from "../../services/usuarios/deletarUsuario";

export default function ListagemUsuario() {
  const { usuarios, isLoading, error } = useListarUsuarios();
  const { deletarUsuario } = useDeletarUsuario()

  const handleDelete = (usuarioId: number) => {
    deletarUsuario(usuarioId);
  };

  return (
    <>
      <Menu />
      <div>
      <h2 className="mt-6 mb-6 font-sans text-md font-bold tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
            Escoteiros cadastrados
      </h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Login
              </th>
              <th scope="col" className="px-6 py-3">
                Editar
              </th>
              <th scope="col" className="px-6 py-3">
                Excluir
              </th>
            </tr>
          </thead>
          <tbody>
            {usuarios && usuarios?.content.map((user: IUsuario) => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.email}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.login}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  onClick={() => { }}>
                  <BiEdit />
                </th>
                <th scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  onClick={() => handleDelete(user.id)}>
                  <BiTrash />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </>
  )
}

