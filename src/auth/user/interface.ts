import { IUser } from "../interface";

export type { IUser };

export interface IFindUser {
  message: string;
  object: {
    tipos: string[];
    usuario: IUser;
  };
}

export interface ISaveUser {
  tipos: string[];
  usuario: IUser;
}
