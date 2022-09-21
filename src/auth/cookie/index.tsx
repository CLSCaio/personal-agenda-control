import cookie from "js-cookie";
import { IGlobalAuth } from "../interface";

export const removeCookie = () => cookie.remove("personal-agenda-control-auth");

export const setCookie = (user: IGlobalAuth) => {
  if (user) {
    const session: IGlobalAuth = {
      accessToken: user.accessToken,
      username: user.username,
      tipos: user.tipos,
      id: user.id,
    };
    cookie.set("personal-agenda-control-auth", JSON.stringify(session), {
      expires: 1,
    });
  } else cookie.remove("personal-agenda-control-auth");
};

export const getCookie = () => {
  const authCookie: any = cookie.get("personal-agenda-control-auth");
  const parse: IGlobalAuth = authCookie && JSON.parse(authCookie);
  return parse;
};
