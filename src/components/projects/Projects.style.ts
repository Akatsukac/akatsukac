import styled from 'styled-components';
import constants from '../../styling/constants';

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

export const StyledProjectHeader = styled.h2`
  font-size: ${constants.typography.fontSize.lg};
  font-weight: ${constants.typography.fontWeight.bold};
`;


export const StyledProjectsContainer = styled.div`
  .project:nth-child(even) {
    background-color: ${constants.colors.black};
    color: ${constants.colors.white};

    .active {
      color: ${constants.colors.white};
    }
  }
`;

export const StyledProjectSubheader = styled.h4`
  font-size: ${constants.typography.fontSize.md};
  font-weight: ${constants.typography.fontWeight.bold};

  &.collapsed {
    display: none;
  }

  &.visible {
    display: block;
  }
`;
