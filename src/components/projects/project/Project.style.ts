import constants from '../../../styling/constants';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../../styling/core';

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
  color: ${constants.colors.black};
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

export const ChildrenContainer = styled.div`
  min-width: 100%;
`;

export const CollapsibleContainer = styled.div`
  position: relative;
`;

export const ProjectContainer = styled.div`
  padding: 15px;
  display: flex;
  overflow: hidden;

  ${media(constants.breakpoints.tablet)`
    padding: 20px 150px;
  `};

  ${media(constants.breakpoints.desktop)`
    min-height: 400px;
    padding: 50px 250px 70px;
  `};
`;

export const StyledSpan = styled.span`
  font-size: ${constants.typography.fontSize.md};
  font-weight: ${constants.typography.fontWeight.bold};
  padding: 10px 0;

  &.read-less {
    border-bottom: 4px solid ${constants.colors.orange};
    padding: 12px 0;
  }

  ${media(constants.breakpoints.tablet)`
    font-size: calc(${constants.typography.fontSize.sm} + 6px);
  `};

  ${media(constants.breakpoints.desktop)`
    font-size: ${constants.typography.fontSize.md};
  `};
`;

export const ToggleIcon = styled(Img)`
  min-height: 45px;
  min-width: 45px;
  transform: rotate(90deg);
  margin: 5px 20px 20px 20px; 

  &.read-less {
    border: 4px solid ${constants.colors.orange};
    min-height: 63px;
    min-width: 63px;
    margin 2px 25px;

    img {
      padding: 4px;
    }
  }
`;