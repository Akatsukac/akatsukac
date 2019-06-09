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
  width: 100%;
  ${media(constants.breakpoints.tablet)`
    width: 35%;
  `};
`;

export const Portrait = styled(Img)`
  width: 100%;
  height: 100%;
  ${media(constants.breakpoints.tablet)`
    min-height: 200px;
    min-width: 200px;
    height: 25%;
    width: 25%;
  `};
`;

export const StyledHeader = styled.h2`

  font-size: calc(${constants.typography.fontSize.md} - 6px);
  font-weight: ${constants.typography.fontWeight.bold};
  text-align: left;

  ${media(constants.breakpoints.tablet)`
    margin: 0;
    font-size: ${constants.typography.fontSize.md};
  `};

  ${media(constants.breakpoints.desktop)`
    font-size: ${constants.typography.fontSize.lg};
  `};
`;

export const StyledParagraph = styled.p`
  &:first-child, &:last-child {
      margin: 0;
  }
  font-size: calc(${constants.typography.fontSize.sm} - 2px);
  text-align: left;
  font-weight: ${constants.typography.fontWeight.normal};
  color: ${constants.colors.black};

  ${media(constants.breakpoints.tablet)`
    font-size: calc(${constants.typography.fontSize.sm} - 2px);
  `}; 

  ${media(constants.breakpoints.desktop)`
    font-size: calc(${constants.typography.fontSize.md} - 4px);
  `};
`;