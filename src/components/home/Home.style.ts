import styled from 'styled-components';

export const BackgroundImageStyles = {
    'width': '100%',
    'min-height': '100vh',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': '100% 100%',
    'position': 'initial'
};

export const WelcomeContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
        font-size: 72px;
        font-weight: 300;
        color: white;
    }

    h2 {
        font-size: 32px;
        font-weight: 400;
    }
`;