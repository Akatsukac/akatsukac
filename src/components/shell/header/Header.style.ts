import constants from '../../../styling/constants';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { media } from '../../../styling/core';

export const AppBarStylings = {
  'borderWidth': '0',
  'boxShadow': '0 0',
  'backgroundColor': `${constants.colors.transparent}`
};

export const HeaderContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  color: ${constants.colors.white};
  padding: 30px !important;
`;

export const LinkContainer = styled.div`
  padding: 0 30px;
`;

export const LinksContainer = styled.div`
  display: none;

  ${media(constants.breakpoints.tablet)`
    display: flex;
  `};
`;

export const LogoIcon = styled(Img)`
  min-height: 40px;
  min-width: 40px;

  ${media(constants.breakpoints.tablet)`
    min-height: 55px;
    min-width: 55px;
  `};
`;

export const MenuContainer = styled.div`
  display: block;

  ${media(constants.breakpoints.tablet)`
    display: none;
  `};
`; 

export const MenuIcon = styled(Img)`
  height: 30px;
  width: 30px;
`;

export const StyledLogoAnchor = styled.a`
  cursor: pointer;
`;

export const StyledMenuAnchor = styled.a`
  text-decoration: none;
  color: ${constants.colors.black};
  font-size: ${constants.typography.fontSize.sm};
  font-weight: ${constants.typography.fontWeight.normal};
`;

export const StyledSectionAnchor = styled.a`
  text-decoration: none;
  color: ${constants.colors.white};
  font-size: ${constants.typography.fontSize.sm};
  font-weight: ${constants.typography.fontWeight.bold};

  :hover, &.selected {
    border-bottom: 3px solid ${constants.colors.orange};
    padding-bottom: 5px;
    cursor: pointer;
  }
`;

export const TransAppBarStylings = `
  border-width: 0; 
  box-shadow: 0 0; 
  background-color: ${constants.colors.transparent}; 
  transition: all 0.25s ease-in;
`;
