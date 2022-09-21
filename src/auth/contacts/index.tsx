import { authApi, headers } from "../axios";
import { IContacts } from "./interface";

export const listContacts = async (id: number) => {
  const request = await authApi.get<IContacts[]>(
    `contato/listar/${id}`,
    headers
  );

  return request.data;
};

export const searchContact = async (termo: string) => {
  const request = await authApi.post<IContacts[]>(
    `contato/pesquisar`,
    termo,
    headers
  );

  return request.data;
};

export const removeContact = async (id: number) => {
  const request = await authApi.delete<{
    message: string;
    object: boolean;
  }>(`contato/remover/${id}`, headers);

  return request.data;
};

export const saveContact = async (payload: IContacts) => {
  const request = await authApi.post<{
    message: string;
    object: IContacts;
  }>(`contato/salvar`, payload, headers);

  return request.data;
};
