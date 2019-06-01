import styled from 'styled-components';

export const StyledProjectHeader = styled.h2`
  font-size: 48px;
  font-weight: 700;
`;

export const StyledSubsection = styled.h4`
  font-size: 32px;
  font-weight: 700;

  &.collapsed {
    display: none;
  }

  &.visible {
    display: block;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 28px;
  font-weight: 400;

  &.collapsed {
    display: none;
  }

  &.visible {
    display: block;
  }
`;

export const StyledProjectsContainer = styled.div`
  .project:nth-child(even) {
    background-color: #2D3739;
    color: white;

    .active {
      color: white;
    }
  }
`;
