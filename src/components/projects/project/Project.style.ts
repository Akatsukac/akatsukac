import styled from 'styled-components';
import Img from 'gatsby-image';

export const ChildrenContainer = styled.div`
    grid-column: 1;
`;

export const CollapsibleContainer = styled.div`
    position: relative;
    width: 100%;
    grid-column: 2;
    padding: 20px;
`;
export const ProjectContainer = styled.div`
    padding: 0 60px;
    display: grid;
`;
export const ButtonContainer = styled.button`
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform-origin: 100% 0;
    transform: rotate(-90deg) translateX(25%);
    display: flex;
    background: none;
    border: none;
`;

export const LogoImg = styled(Img)`
  min-height: 55px;
  min-width: 55px;
`;

export const StyledSpan = styled.span`
    font-size: 32px;
    font-weight: 700;
    padding: 10px;
`;