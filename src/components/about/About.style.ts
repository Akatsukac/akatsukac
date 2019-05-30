import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledAboutContainer = styled.div`
    padding: 50px 0;
    text-align: center;
`;

export const StyledAnchor = styled.a`
    text-decoration: none;
`;

export const StyledContentContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
`;

export const LogoImg = styled(Img)`
    min-height: 500px;
    min-width: 500px;
`;

export const StyledParagraphContainer = styled.div`
    max-width: 40%;
    margin: 0;
    text-align: initial;
`;

export const StyledParagraph = styled.p`

    &:first-child, &:last-child {
        margin: 0;
    }

    font-size: 24px;
    font-weight: 400;
`;

export const ButtonStyles = {
    'minWidth': '300px',
    'minHeight': '70px',
    'fontSize': '1.3rem',
    'border': '7px solid #2D3739',
};
