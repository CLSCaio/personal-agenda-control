import React from "react";
import { Container } from "library-caiol.sousa";

import { Home } from "../layouts";

const Base: React.FC = () => (
  <Container gap={[30, 30]} direction="column">
    <h1>Seja bem vindo ao personal-agenda-control</h1>
    <h2>PROJETO EM DESENVOLVIMENTO</h2>

    <Home />
  </Container>
);

export default Base;
