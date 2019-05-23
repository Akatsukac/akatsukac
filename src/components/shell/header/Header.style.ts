import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../../styling/core';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'gatsby';


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
  color: white;
`;

export const AppBarStylings = {
  'border-width': '0px',
  'box-shadow': '0px 0px',
  'background-color': 'rgba(0,0,0,0.0)'
};

export const LinksContainer = styled.div`
  display: flex;
`;

export const LinkContainer = styled.div`
  padding: 25px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 25px;

  :hover {
    border-bottom: 4px solid #D95920;
    padding-bottom: 5px;
  }
`;
