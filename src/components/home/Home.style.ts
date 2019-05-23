import styled from 'styled-components';

export const BackgroundImageStyles = {
    'width': '100%',
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
        font-size: 75px;
        color: white;
        font-weight: initial;
    }

    h2 {
        font-size: 45px;
        font-weight: initial;
    }
`;