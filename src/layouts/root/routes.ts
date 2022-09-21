import { Routes } from "library-caiol.sousa";
import { logout } from "./services";

const defaultRoutes: Routes[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/myProfile",
    label: "Meu Cadastro",
  },
  {
    href: "/contacts",
    label: "Contatos",
  },
];

export const routes: Routes[] = [
  ...defaultRoutes,
  {
    href: "/",
    label: "Logout",
    onClick: () => logout(),
  },
];

export const routesAdmin: Routes[] = [
  ...defaultRoutes,
  {
    href: "/users",
    label: "Usuarios",
  },
  {
    href: "/",
    label: "Logout",
    onClick: () => logout(),
  },
];
