import styled from 'styled-components';

export const StyledProjectHeader = styled.h3`
    font-size: 32px;
    font-weight: 700;
    color: #2D3739;
`;

export const StyledParagraph = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: #2D3739;

    &.collapsed {
        display: none;
    }

    &.visible {
        display: block;
    }
`;

export const StyledProjectsContainer = styled.div`
    .project:nth-child(even) {
        background-color: #D95920;
        color: white;
    }
`;
