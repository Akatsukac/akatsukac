import constants from '../../styling/constants';
import styled from 'styled-components';

export const BackgroundImageStyles = {
  'width': '100%',
  'minHeight': '100vh',
  'backgroundPosition': 'center',
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': '100% 100%',
  'position': 'relative'
};

export const StyledHeader = styled.h1`
  font-size: ${constants.typography.fontSize.xl};
  font-weight: ${constants.typography.fontWeight.light};
  color: ${constants.colors.white};
`;

export const StyledSubheader = styled.h2`
  font-size: ${constants.typography.fontSize.md};
  font-weight: ${constants.typography.normal};
  color: ${constants.colors.black};
`;

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
