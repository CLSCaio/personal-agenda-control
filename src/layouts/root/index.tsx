import { ReactNode } from "react";

import { Main, Header } from "library-caiol.sousa";

import { StoreContactProvider } from "../../database";

import routes from "./routes";

interface RootProps {
  children: ReactNode;
}

export const Root = ({ children }: RootProps) => (
  <StoreContactProvider>
    <Header
      routes={routes}
      link={{ type: "next", variant: "doubleLine" }}
      title="Personal-Agenda-Control"
      bgColor="white"
    />

    <Main withPad>{children}</Main>
  </StoreContactProvider>
);
