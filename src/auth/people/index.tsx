import { authApi, headers } from "../axios";
import { IDeletePeople, IListPeople } from "./interface";

export const listPeople = async (id: number) => {
  const request = await authApi.get<IListPeople[]>(
    `contato/listar/${id}`,
    headers
  );

  return request.data;
};

export const searchPeople = async (termo: string) => {
  const request = await authApi.post<IListPeople[]>(
    `contato/listar`,
    termo,
    headers
  );

  return request.data;
};

export const removePeople = async (id: number) => {
  const request = await authApi.delete<IDeletePeople>(
    `contato/listar/${id}`,
    headers
  );

  return request.data;
};

export const savePeople = async (payload: IListPeople) => {
  const request = await authApi.post<IListPeople>(`contato/listar/`, payload);

  return request.data;
};
