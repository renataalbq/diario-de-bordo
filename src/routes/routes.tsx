
import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/home";
import ListagemAtividade from "../screens/listagem-atividade";
import CadastroAtividade from "../screens/cadastro-atividade";
import CadastroUsuario from "../screens/cadastro-usuario";
import DetalheAtividade from "../screens/detalhe-atividade";
import Login from "../screens/login";

export const Routes = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cadastro-atividade",
    element: <CadastroAtividade />,
  },
  {
    path: "/listagem-atividade",
    element: <ListagemAtividade />,
  },
  {
    path: "/detalhe-atividade",
    element: <DetalheAtividade />,
  },
  {
    path: "/cadastro-usuario",
    element: <CadastroUsuario />,
  },
  {
    path: "/",
    element: <Login />,
  },

]);