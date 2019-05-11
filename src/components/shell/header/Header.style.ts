import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../../styling/core';

export const LogoImg = styled(Img)`
  min-height: 32px;
  min-width: 32px;
  
  ${media(600)`
    min-height: 48px;
    min-width: 48px;
  `}
`;

