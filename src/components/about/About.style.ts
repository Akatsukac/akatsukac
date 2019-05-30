import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledAboutContainer = styled.div`
    padding: 50px 0 90px 0;
    position: relative;
`;

export const StyledContentContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
`;

export const LogoImg = styled(Img)`
    min-height: 500px;
    min-width: 500px;
`;

export const StyledParagraphContainer = styled.div`
    max-width: 40%;
    margin: 0;
`;

export const StyledParagraph = styled.p`

    &:first-child, &:last-child {
        margin: 0;
    }

    font-size: 24px;
    font-weight: 400;
`;

export const ButtonStyles = {
    'position': 'absolute',
    'left': '40%',
    'minWidth': '300px',
    'minHeight': '70px',
    'fontSize': '1.3rem',
    'border': '7px solid #2D3739'
};
