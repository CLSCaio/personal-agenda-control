import { IPeople, IUser } from "../interface";

export interface IListPeople {
  email: string;
  id: number;
  pessoa: IPeople;
  privado: true;
  tag: string;
  telefone: string;
  tipoContato: string;
  usuario: IUser;
}

export interface IDeletePeople {
  message: string;
  object: boolean;
}
