import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../../styling/core';

export const LogoImg = styled(Img)`
  min-height: 32px;
  min-width: 32px;
  margin: 5px;
  
  ${media(600)`
    min-height: 48px;
    min-width: 48px;
  `}
`;

export const FooterContainer = styled.div`
    height: 56px;
    width: 100%;
    background-color: #3f51b5;
    display: flex;
    justify-content: flex-end;
`;