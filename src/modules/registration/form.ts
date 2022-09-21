import { Inputs } from "library-caiol.sousa";

export const inputs: Inputs[] = [
  {
    name: "name",
    label: { name: "Nome" },
  },
  {
    name: "email",
    label: { name: "E-mail" },
  },
  {
    name: "phone",
    label: { name: "Telefone" },
    mask: "phone",
  },
];

export const design = {
  maxW: 600,
};
