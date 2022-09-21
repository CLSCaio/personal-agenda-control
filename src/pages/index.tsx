import React from "react";
import { Container } from "library-caiol.sousa";

import { Home } from "../views";

const Base: React.FC = () => (
  <Container gap={[100, 30]} direction="column">
    <Home />
  </Container>
);

export default Base;
