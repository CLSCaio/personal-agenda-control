import { ReactNode } from "react";

import { Main, Header } from "library-caiol.sousa";

import { StoreContactProvider } from "../../database";
import { getCookie } from "../../auth";

import { routes, routesAdmin } from "./routes";

interface RootProps {
  children: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  const { tipos } = getCookie();

  return (
    <StoreContactProvider>
      <Header
        routes={tipos[0] === "ROLE_ADMIN" ? routesAdmin : routes}
        link={{ type: "next", variant: "doubleLine" }}
        title="Personal-Agenda-Control"
        bgColor="white"
      />

      <Main withPad>{children}</Main>
    </StoreContactProvider>
  );
};
