import BackgroundImage from 'gatsby-background-image';
import Button from '@material-ui/core/Button';
import constants from '../../styling/constants';
import styled from 'styled-components';
import { media } from '../../styling/core';

export const ResumeButton = styled(Button)`
  border: 3px solid ${constants.colors.white} !important;
  color: ${constants.colors.white} !important;
  border-radius: 0 !important;
  display: inline-block !important;

  ${media(constants.breakpoints.tablet)`
    min-width: 300px !important;
    min-height: 70px;
    font-size: calc(${constants.typography.fontSize.sm} + 4px) !important;
    border: 3px solid ${constants.colors.white} !important;
  `};
`;

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
  `};
`;

export const StyledSubheader = styled.h2`
  font-size: calc(${constants.typography.fontSize.md} - 6px);
  font-weight: ${constants.typography.fontWeight.normal};
  color: ${constants.colors.black};
  white-space: normal;
  margin: 0;

  ${media(constants.breakpoints.tablet)`
    font-size: calc(${constants.typography.fontSize.md});
    white-space: nowrap;
    line-height: 0;
  `};

  ${media(constants.breakpoints.desktop)`
    font-size: calc(${constants.typography.fontSize.md} + 4px);
  `};
`;

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
