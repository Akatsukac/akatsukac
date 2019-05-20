import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const BackgroundContent = styled(BackgroundImage)`
    width: 100%;
    min-height: inherit;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const WelcomeContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;

    h1 {
        font-size: 75px;
    }

    h2 {
        font-size: 45px;
    }
`;