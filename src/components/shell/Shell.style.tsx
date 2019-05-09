import styled from 'styled-components';
import { media } from '../../styling/core';

export const BodyContainerSize = `100`;
export const BodyContainerSizeTablet = `100`;

export const BodyContainerDiv = styled.div`
  padding: 1vh 0 1vh 0;
  min-height: ${BodyContainerSize};
  
  ${media.tablet`
    min-height: ${BodyContainerSizeTablet};
  `}
`;
