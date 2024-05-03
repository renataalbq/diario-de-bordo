import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";

export const AppRoutes = (): JSX.Element => {

  return <RouterProvider router={Routes} />;
};