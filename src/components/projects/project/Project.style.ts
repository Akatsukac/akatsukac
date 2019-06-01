import styled from 'styled-components';
import Img from 'gatsby-image';

export const CollapsibleContainer = styled.div`
    position: relative;
    padding: 20px;
`;

export const ProjectContainer = styled.div`
    padding: 0 60px;
    display: flex;
    min-height: 350px;
    overflow: hidden;
`;
export const ButtonContainer = styled.button`
    position: absolute;
    right: 0%;
    top: 0%;
    transform-origin: 100% 0;
    transform: rotate(-90deg) translateY(-20%);
    display: flex;
    background: none;
    border: none;
    margin: 32px 0;
    color: #2D3739;

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
`;

export const StyledSpan = styled.span`
    font-size: 32px;
    font-weight: 700;
    padding: 10px;
`;