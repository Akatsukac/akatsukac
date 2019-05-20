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

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  color: #EDC202;
`;

export const AppBarStylings = {
  'border-width': '0px',
  '-webkit-box-shadow': '0px 0px',
  'box-shadow': '0px 0px',
  'background-color': 'rgba(0,0,0,0.0)',
  'background-image': '-webkit-gradient(linear, 50.00% 0.00%, 50.00% 100.00%, color-stop( 0% , rgba(0,0,0,0.00)),color-stop( 100% , rgba(0,0,0,0.00)))',
  'background-image': '-webkit-linear-gradient(270deg,rgba(0,0,0,0.00) 0%,rgba(0,0,0,0.00) 100%)',
  'background-image': 'linear-gradient(180deg,rgba(0,0,0,0.00) 0%,rgba(0,0,0,0.00) 100%)'
};
