import BackgroundImage from 'gatsby-background-image';
import constants from '../../styling/constants';
import styled from 'styled-components';
import { media } from '../../styling/core';

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

export const StyledBackgroundImage = styled(BackgroundImage)`
  min-height: 100vh;

  :before, :after {
    background-size: cover !important;
  }

  ${media(constants.breakpoints.desktop)`
    :before, :after {
      background-size: 100% 100% !important;
    }
  `};
`;

export const StyledHeader = styled.h1`
  font-size: ${constants.typography.fontSize.md};
  font-weight: ${constants.typography.fontWeight.light};
  color: ${constants.colors.white};
  white-space: normal;

  ${media(constants.breakpoints.tablet)`
    font-size: calc(${constants.typography.fontSize.lg} - 8px);
    white-space: nowrap;
  `};

  ${media(constants.breakpoints.desktop)`
    font-size: ${constants.typography.fontSize.xl};
    white-space: nowrap;
  `};
`;

export const StyledSubheader = styled.h2`
  font-size: calc(${constants.typography.fontSize.md} - 6px);
  font-weight: ${constants.typography.fontWeight.normal};
  color: ${constants.colors.black};
  white-space: normal;

  ${media(constants.breakpoints.tablet)`
    font-size: calc(${constants.typography.fontSize.md});
    white-space: nowrap;
  `};

  ${media(constants.breakpoints.desktop)`
    font-size: calc(${constants.typography.fontSize.md} + 4px);
    white-space: nowrap;
  `};
`;

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
