import styled from 'styled-components';
import Img from 'gatsby-image';
import constants from '../../styling/constants';

export const StyledAnchor = styled.a`
  text-decoration: none;
`;

export const StyledAboutContainer = styled.div`
  padding: 105px 0;
  text-align: center;
  min-height: calc(100vh - 115px);
  display: flex;
  justify-content: space-evenly;
  // ie compatibility
  @media all and (-ms-high-contrast: none) {
    justify-content: space-around;
  }
`;

export const LogoImg = styled(Img)`
  height: calc(90vh - 115px);
  width: calc(72vh - 92px);
`;

export const StyledParagraphContainer = styled.div`
  width: 35%;
  margin: 0;
`;

export const StyledParagraph = styled.p`

  &:first-child, &:last-child {
      margin: 0;
  }
  text-align: initial;
  font-size: 28px;
  font-weight: 400;
  color: #2D3739;
`;

export const ButtonStyles = {
  'minWidth': '300px',
  'minHeight': '70px',
  'fontSize': '1.3rem',
  'border': '7px solid #2D3739',
  'borderRadius': '0'
};
