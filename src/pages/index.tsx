import React, { useEffect, useState } from "react";
import { Container } from "library-caiol.sousa";

import { getCookie, IGlobalAuth } from "../auth";

import { Home, Login } from "../views";

const Base: React.FC = () => {
  const cookies = getCookie();

  return (
    <Container gap={[100, 30]} direction="column">
      {!cookies ? <Login /> : <Home />}
    </Container>
  );
};

export default Base;
