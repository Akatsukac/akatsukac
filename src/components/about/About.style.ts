import constants from '../../styling/constants';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../styling/core';

export const AboutContainer = styled.div`
  padding: 30px 15px;
  text-align: center;
  min-height: calc(100vh - ${constants.header.height});
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  // ie compatibility
  @media all and (-ms-high-contrast: none) {
    justify-content: space-around;
  }
  ${media(constants.breakpoints.tablet)`
    flex-direction: row;
    padding: 105px 0;
  `};

`;

export const ParagraphsContainer = styled.div`
  width: 35%;
`;

export const Portrait = styled(Img)`
  min-height: 200px;
  min-width: 200px;
  height: 25%;
  width: 25%;
`;

export const ResumeButtonStyles = {
  'minWidth': '300px',
  'minHeight': '70px',
  'fontSize': `calc(${constants.typography.fontSize.sm} + 4px)`,
  'border': `7px solid ${constants.colors.black}`,
  'borderRadius': '0'
};

export const StyledAnchor = styled.a`
  text-decoration: none;
`;

export const StyledHeader = styled.h2`
  font-weight: ${constants.typography.fontWeight.bold};
  font-size: ${constants.typography.fontSize.lg};
  text-align: left;
  margin: 0;
`;

export const StyledParagraph = styled.p`
  &:first-child, &:last-child {
      margin: 0;
  }
  font-size: calc(${constants.typography.fontSize.md} - 4px);
  text-align: left;
  font-weight: ${constants.typography.fontWeight.normal};
  color: ${constants.colors.black};

  ${media(constants.breakpoints.tablet)`
    font-size: calc()
  `};

  ${media(constants.breakpoints.desktop)`
    font-size: calc();
  `};

 
`;