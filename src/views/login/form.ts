import { Inputs } from "library-caiol.sousa";

export const inputs: Inputs[] = [
  {
    name: "username",
    label: { name: "Usuario" },
  },
  {
    name: "password",
    label: { name: "Senha" },
    type: "password",
  },
];

export const design = {
  maxW: 600,
};
