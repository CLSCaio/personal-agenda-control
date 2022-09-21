import { removeCookie } from "../../auth";

export const logout = () => {
  removeCookie();
  window.location.href = "/";
};
