import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../../styling/core';
import Toolbar from '@material-ui/core/Toolbar';

export const LogoImg = styled(Img)`
  min-height: 32px;
  min-width: 32px;
  
  ${media(600)`
    min-height: 48px;
    min-width: 48px;
  `}
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
