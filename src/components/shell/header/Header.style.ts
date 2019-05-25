import Img from 'gatsby-image';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'gatsby';


export const LogoImg = styled(Img)`
  min-height: 55px;
  min-width: 55px;
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  align-items: flex-start !important;
  flex-direction: column;
  color: white;
  padding: 30px !important;

`;

export const AppBarStylings = {
  'border-width': '0px',
  'box-shadow': '0px 0px',
  'background-color': 'rgba(0,0,0,0.0)',
  'width': 'inherit',
  'right': 'inherit'
};

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const LinkContainer = styled.div`
  padding: 10px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 700;

  :hover {
    border-bottom: 4px solid #D95920;
    padding-bottom: 5px;
  }
`;
