import React from "react";
import { Group } from "library-caiol.sousa";

import { Title, SubTitle } from "./styles";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

export const Heading = ({ title, subtitle }: HeadingProps) => (
  <Group direction="column" gap={[20, 20]}>
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </Group>
);
