import { IPeople, IUser } from "../interface";

export interface IContacts {
  email: string;
  id: number;
  pessoa: IPeople;
  privado: boolean;
  tag: string;
  telefone: string;
  tipoContato: string;
  usuario: IUser;
}
