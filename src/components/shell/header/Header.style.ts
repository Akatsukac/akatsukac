import Img from 'gatsby-image';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

export const LogoImg = styled(Img)`
  min-height: 55px;
  min-width: 55px;
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 30px !important;
`;

export const AppBarStylings = {
  'borderWidth': '0px',
  'boxShadow': '0px 0px',
  'backgroundColor': 'rgba(0,0,0,0.0)'
};

export const LinksContainer = styled.div`
  display: flex;
`;

export const LinkContainer = styled.div`
  padding: 0 30px;
`;

export const StyledSectionAnchor = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 700;

  :hover {
    border-bottom: 4px solid #D95920;
    padding-bottom: 5px;
    cursor: pointer;
  }
`;

export const StyledLogoAnchor = styled.a`
  cursor: pointer;
`;
