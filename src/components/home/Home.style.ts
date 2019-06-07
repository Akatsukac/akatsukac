import BackgroundImage from 'gatsby-background-image';
import constants from '../../styling/constants';
import styled from 'styled-components';
import { media } from '../../styling/core';

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
