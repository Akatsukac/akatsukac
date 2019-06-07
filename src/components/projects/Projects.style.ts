import constants from '../../styling/constants';
import styled from 'styled-components';
import { media } from '../../styling/core';

export const ProjectsContainer = styled.div`
  .project:nth-child(even) {
    background-color: ${constants.colors.black};
    color: ${constants.colors.white};

    .active {
      color: ${constants.colors.white};
    }
  }
`;

export const StyledHeader = styled.h2`
  font-size: calc(${constants.typography.fontSize.md} - 6px);
  font-weight: ${constants.typography.fontWeight.bold};

  ${media(constants.breakpoints.tablet)`
    font-size: ${constants.typography.fontSize.md};
  `};

  ${media(constants.breakpoints.desktop)`
    font-size: ${constants.typography.fontSize.lg};
  `};
`;

export const StyledParagraph = styled.p`
  font-size: calc(${constants.typography.fontSize.md} - 4px);
  font-weight: ${constants.typography.fontWeight.normal};

  &.collapsed {
    display: none;
  }

  &.visible {
    display: block;
  }
`;

export const StyledSubheader = styled.h4`
  font-size: ${constants.typography.fontSize.md};
  font-weight: ${constants.typography.fontWeight.bold};

  &.collapsed {
    display: none;
  }

  &.visible {
    display: block;
  }
`;
