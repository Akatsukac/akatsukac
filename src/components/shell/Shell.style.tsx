import styled from 'styled-components';
import { media } from '../../styling/core';

export const BodyContainerSize = `100vh`;
;
export const BodyContainerSizeTablet = `100`;

export const BodyContainerDiv = styled.div`
  min-height: ${BodyContainerSize};
  
  ${media(600)`
    min-height: ${BodyContainerSizeTablet};
  `}
`;
