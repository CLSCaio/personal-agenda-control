import { authApi, headers } from "../axios";
import { IContacts } from "../contacts/interface";

export const searchFavorite = async () => {
  const request = await authApi.get<IContacts[]>(`favorito/pesquisar`, headers);

  return request.data;
};

export const removeFavorite = async (id: number) => {
  const request = await authApi.delete<{
    message: string;
    object: boolean;
  }>(`favorito/remover/${id}`, headers);

  return request.data;
};

export const saveFavorite = async (payload: IContacts) => {
  const request = await authApi.post<{
    message: string;
    object: boolean;
  }>(`favorito/salvar`, payload, headers);

  return request.data;
};
