import { Inputs } from "library-caiol.sousa";

export const inputs: Inputs[] = [
  {
    name: "name",
    label: { name: "Nome" },
  },
  {
    name: "username",
    label: { name: "Usuario" },
  },
  {
    name: "brithday",
    label: { name: "Data de aniversario" },
    mask: "date",
  },
  {
    name: "email",
    label: { name: "E-mail" },
  },
  {
    name: "cpf",
    label: { name: "Cpf" },
    mask: "cpf",
  },
  {
    name: "phone",
    label: { name: "Telefone" },
    mask: "phone",
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
