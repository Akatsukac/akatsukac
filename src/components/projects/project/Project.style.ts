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
    min-height: 350px;
`;
export const ButtonContainer = styled.button`
    position: absolute;
    right: 50%;
    top: 0%;
    transform-origin: 100% 0;
    transform: rotate(-90deg);
    display: flex;
    background: none;
    border: none;
    margin: 32px 0;

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
`;

export const StyledSpan = styled.span`
    font-size: 32px;
    font-weight: 700;
    padding: 10px;
`;