import { ReactNode } from "react";
import { GlobalStyle, Main, Header } from "library-caiol.sousa";

import routes from "./routes";

interface RootProps {
  children: ReactNode;
}

export const Root = ({ children }: RootProps) => (
  <>
    <Header
      routes={routes}
      link={{ type: "next", variant: "doubleLine" }}
      title="Personal-Agenda-Control"
    />
    <Main withPad>{children}</Main>

    <GlobalStyle />
  </>
);
