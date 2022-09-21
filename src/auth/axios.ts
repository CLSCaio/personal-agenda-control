import Axios from "axios";
import { getCookie } from "./cookie";

const NEXT_PUBLIC_BASE_URL = "https://metawaydemo.vps-kinghost.net:8485/api/";

const initAxios = (baseURL: string) => {
  const axios = Axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      plataforma: "personal-agenda-control",
    },
    baseURL,
  });

  return axios;
};

export const headers = {
  headers: {
    Authorization: `Bearer ${getCookie()?.accessToken}`,
  },
};

export const authApi = initAxios(NEXT_PUBLIC_BASE_URL);
