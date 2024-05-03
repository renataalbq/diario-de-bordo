
import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";
import ListagemUsuario from "../screens/listagem-usuario";

export const AdminRoutes = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/listagem-usuario",
    element: <ListagemUsuario />,
  },
]);