import { Menu } from "../../components/menu"
import { IUsuario } from "../../model/IUsuario";
import useListarUsuarios from "../../services/usuarios/listarUsuarios";

  export default function ListagemUsuario() {
    const { usuarios, isLoading, error } = useListarUsuarios();
    console.log(usuarios.content)
    return (
      <>
      <Menu />
      <div>
        <h6>Escoteiros cadastrados</h6>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {usuarios ? usuarios.content?.map((user: IUsuario) => (
          <li key={user.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">Login: {user.login}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-900">Email: {user.email}</p>
              </div>
            </div>
          </li>
        )) : null}
      </ul>
      </>
    )
  }
  