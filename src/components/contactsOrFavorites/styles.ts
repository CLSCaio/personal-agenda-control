import styled from "styled-components";
import Image from "next/image";
import { medias } from "library-caiol.sousa";

export const Photo = styled.span`
  display: none !important;

  ${medias.xXsmall} {
    display: block !important;
  }
`;

export const Img = styled(Image)``;

export const Title = styled.h2``;

export const SubTitle = styled.h4`
  font-weight: bold;
`;

export const Personal = styled.p``;

export const Icon = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  :hover {
    .icon {
      transform: scale(1.1);
    }

    .text {
      display: flex;
    }
  }

  position: relative;
`;

export const Box = styled.h4`
  display: none;
  padding: 30px;
  text-align: center;

  position: absolute;
  top: 1px;
`;
