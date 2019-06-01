import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledAnchor = styled.a`
    text-decoration: none;
`;

export const StyledAboutContainer = styled.div`
  padding: 50px 0;
  text-align: center;
  min-height: calc(100vh - 115px);
    display: flex;
    justify-content: space-evenly;
`;

export const LogoImg = styled(Img)`
    min-height: 75vh;
    min-width: 60vh;
`;

export const StyledParagraphContainer = styled.div`
    max-width: 40%;
    margin: 0;
`;

export const StyledParagraph = styled.p`

    &:first-child, &:last-child {
        margin: 0;
    }
    text-align: initial;
    font-size: 24px;
    font-weight: 400;
    color: #2D3739;
`;

export const ButtonStyles = {
    'minWidth': '300px',
    'minHeight': '70px',
    'fontSize': '1.3rem',
    'border': '7px solid #2D3739',
};
