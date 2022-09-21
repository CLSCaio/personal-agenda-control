import { authApi } from "../axios";
import { IPayload, IAuthLogin } from "./interface";

export const authLogin = async (payload: IPayload) => {
  const request = await authApi.post<IAuthLogin>(`auth/login`, payload);

  return request.data;
};
