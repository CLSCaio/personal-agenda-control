import { Routes } from "library-caiol.sousa";
import { logout } from "./services";

const routes: Routes[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/myProfile",
    label: "Meu Cadastro",
  },
  {
    href: "/",
    label: "Logout",
    onClick: () => logout(),
  },
];

export default routes;
