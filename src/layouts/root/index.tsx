import { ReactNode, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { GlobalStyle, Main, Header } from "library-caiol.sousa";

import { SkeletonLoading } from "../../components";
import { getCookie, IGlobalAuth } from "../../auth";

import routes from "./routes";

interface RootProps {
  children: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  const [cookie, setCookie] = useState<IGlobalAuth | undefined>(undefined);

  useEffect(() => {
    const cookies = getCookie();
    setCookie(cookies);
  }, []);

  return (
    <>
      {!cookie ? (
        <Skeleton count={3} inline wrapper={SkeletonLoading} />
      ) : (
        <Header
          routes={routes}
          link={{ type: "next", variant: "doubleLine" }}
          title="Personal-Agenda-Control"
          bgColor="white"
        />
      )}

      <Main withPad>{children}</Main>

      <GlobalStyle />
    </>
  );
};
