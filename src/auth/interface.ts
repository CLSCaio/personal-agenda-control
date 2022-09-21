export interface IGlobalAuth {
  accessToken: string;
  username: string;
  tipos: string[];
  id: number;
}

export interface IAddress {
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  id: number;
  logradouro: string;
  numero: number;
  pais: string;
}

export interface IUser {
  cpf: string;
  dataNascimento: string;
  email: string;
  id: number;
  nome: string;
  password: string;
  telefone: string;
  username: string;
}

export interface IPeople {
  cpf: string;
  endereco: IAddress;
  foto: {
    id: string;
    name: string;
    type: string;
  };
  id: number;
  nome: string;
}
