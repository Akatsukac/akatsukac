import Img from 'gatsby-image';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'gatsby';


export const LogoImg = styled(Img)`
  min-height: 70px;
  min-width: 70px;
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 40px !important;

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
  padding: 0 30px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 35px;

  :hover {
    border-bottom: 4px solid #D95920;
    padding-bottom: 5px;
  }
`;
