import { IGlobalAuth } from "../interface";

export interface IAuthLogin extends IGlobalAuth {
  tokenType: string;
}

export interface IPayload {
  password: string;
  username: string;
}
