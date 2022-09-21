import React, { useEffect, useState } from "react";
import { Container } from "library-caiol.sousa";

import { getCookie, IGlobalAuth } from "../auth";

import { Home, Login } from "../views";

const Base: React.FC = () => {
  const [cookie, setCookie] = useState<IGlobalAuth | undefined>(undefined);

  useEffect(() => {
    const cookies = getCookie();
    setCookie(cookies);
  }, []);

  return (
    <Container gap={[100, 30]} direction="column">
      {!cookie ? <Login /> : <Home />}
    </Container>
  );
};

export default Base;
