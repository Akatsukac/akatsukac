import styled from 'styled-components';
import Img from 'gatsby-image';

export const CollapsibleContainer = styled.div`
  position: relative;
  padding: 20px;
`;

export const ProjectContainer = styled.div`
  padding: 50px 250px 70px;
  display: flex;
  min-height: 400px;
  overflow: hidden;
`;
export const ButtonContainer = styled.button`
  position: absolute;
  right: 0%;
  top: 0%;
  transform-origin: 90% 0;
  transform: rotate(-90deg) translateY(135%);
  display: flex;
  background: none;
  border: none;
  margin: 32px 0;
  color: #2D3739;
  cursor: pointer;

  :focus {
    outline: 0;
  }

  // ie compatibility
  @media all and (-ms-high-contrast: none) {
    position: relative;
  }

  &.active {
    display: flex;
  }

  &.inactive {
    display: none;
  }
`;

export const LogoImg = styled(Img)`
  min-height: 55px;
  min-width: 55px;
  transform: rotate(90deg);
  margin: 0 20px 20px 20px; 

  &.read-less {
    border: 4px solid #D95920;
  }
`;

export const StyledSpan = styled.span`
  font-size: 32px;
  font-weight: 700;
  padding: 10px 0;

  &.read-less {
    border-bottom: 4px solid #D95920;
    padding: 6px 0;
  }
`;