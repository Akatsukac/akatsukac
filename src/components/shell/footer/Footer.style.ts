import styled from 'styled-components';
import constants from '../../../styling/constants';

export const FooterContainer = styled.div`
    line-height: 60px;
    background-color: #2D3739;
    text-align: center;
`;

export const CopyrightSpan = styled.span`
    margin: auto 0;
    color: white;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: ${constants.typography.fontSize.xs};
`;
