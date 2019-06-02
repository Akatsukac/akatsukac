import constants from '../../../styling/constants';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    line-height: 60px;
    background-color: ${constants.colors.black};
    text-align: center;
`;

export const CopyrightSpan = styled.span`
    margin: auto 0;
    color: ${constants.colors.white};
    font-size: ${constants.typography.fontSize.xs};
`;
