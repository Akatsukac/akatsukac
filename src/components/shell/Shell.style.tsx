import styled from 'styled-components';
import { media } from '../../styling/core';

export const BodyContainerSize = `1000px`;
export const BodyContainerSizeTablet = `100`;

export const BodyContainerDiv = styled.div`
  padding: 1vh 0 1vh 0;
  min-height: ${BodyContainerSize};
  
  ${media(600)`
    min-height: ${BodyContainerSizeTablet};
  `}
`;
