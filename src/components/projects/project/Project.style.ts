import styled from 'styled-components';
import Img from 'gatsby-image';

export const CollapsibleContainer = styled.div`
  position: relative;
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
  transform-origin: 98% 0;
  transform: rotate(-90deg) translateY(110%);
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
  min-height: 45px;
  min-width: 45px;
  transform: rotate(90deg);
  margin: 5px 20px 20px 20px; 

  &.read-less {
    border: 4px solid #D95920;
    min-height: 63px;
    min-width: 63px;
    margin 2px 25px;

    img {
      padding: 4px;
    }
  }
`;

export const StyledSpan = styled.span`
  font-size: 32px;
  font-weight: 700;
  padding: 10px 0;

  &.read-less {
    border-bottom: 4px solid #D95920;
    padding: 12px 0;
  }
`;