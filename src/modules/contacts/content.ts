import { IContacts } from "../../auth";

export const defaultPayload: IContacts = {
  email: "",
  id: 0,
  pessoa: {
    cpf: "",
    endereco: {
      bairro: "",
      cep: "",
      cidade: "",
      estado: "",
      id: 0,
      logradouro: "",
      numero: 0,
      pais: "",
    },
    foto: {
      id: "",
      name: "",
      type: "",
    },
    id: 0,
    nome: "",
  },
  privado: false,
  tag: "",
  telefone: "",
  tipoContato: "CELULAR",
  usuario: {
    cpf: "",
    dataNascimento: "",
    email: "",
    id: 0,
    nome: "",
    password: "",
    telefone: "",
    username: "",
  },
};
