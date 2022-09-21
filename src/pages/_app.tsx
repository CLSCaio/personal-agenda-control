import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle, Main } from "library-caiol.sousa";

import { Root } from "../layouts";
import { getCookie, IGlobalAuth } from "../auth";
import { Login } from "../views";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  const [cookie, setCookie] = useState<IGlobalAuth | undefined>(undefined);

  useEffect(() => {
    const cookies = getCookie();
    setCookie(cookies);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {!cookie ? (
        <Main>
          <Login />
        </Main>
      ) : (
        <Root>
          <Component {...pageProps} />
        </Root>
      )}
      <GlobalStyle />
    </QueryClientProvider>
  );
};

export default MyApp;
