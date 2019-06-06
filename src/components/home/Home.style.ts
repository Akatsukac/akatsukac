import constants from '../../styling/constants';
import styled from 'styled-components';

export const BackgroundImageStyles = {
  'width': '100%',
  'minHeight': '100vh',
  'backgroundSize': '100% 100%'
};

export const StyledHeader = styled.h1`
  font-size: ${constants.typography.fontSize.xl};
  font-weight: ${constants.typography.fontWeight.light};
  color: ${constants.colors.white};
`;

export const StyledSubheader = styled.h2`
  font-size: calc(${constants.typography.fontSize.md} + 4px);
  font-weight: ${constants.typography.fontWeight.normal};
  color: ${constants.colors.black};
`;

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
