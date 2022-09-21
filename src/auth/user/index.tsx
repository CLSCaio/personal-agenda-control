import { authApi, headers } from "../axios";
import { IFindUser, ISaveUser, IUser } from "./interface";

import { getCookie } from "../cookie";

export const findUser = async (id: number) => {
  const request = await authApi.get<IFindUser>(`usuario/buscar/${id}`, headers);

  return request.data;
};

export const updateUser = async (payload: IUser) => {
  const request = await authApi.put<IUser>(
    `usuario/atualizar`,
    payload,
    headers
  );

  return request.data;
};

export const saveUser = async (payload: ISaveUser) => {
  const request = await authApi.put<IFindUser>(
    `usuario/atualizar`,
    payload,
    headers
  );

  return request.data;
};

export const searchUsers = async (termo: string) => {
  const request = await authApi.post<IUser[]>(
    `usuario/pesquisar`,
    termo,
    headers
  );

  return request.data;
};
