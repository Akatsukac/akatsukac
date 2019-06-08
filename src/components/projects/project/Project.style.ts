import constants from '../../../styling/constants';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../../styling/core';

export const ButtonContainer = styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${constants.colors.black};
  cursor: pointer;
  padding: 0;

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

  ${media(constants.breakpoints.tablet)`
    transform-origin: 92% 0;
    transform: rotate(-90deg) translateY(105%);
    margin: 35px 0;
    position: absolute;
    right: 0%;
    top: 0%;

    &.container-less {
      margin: 26px -10px;
    }

  `};

  ${media(constants.breakpoints.desktop)`
    transform-origin: 98% 0;
    transform: rotate(-90deg) translateY(110%);
    margin: 37px 0;

    &.container-less {
      margin: 32px 0;
    }
  `};

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
  flex-direction: column;

  ${media(constants.breakpoints.tablet)`
    min-height: 300px;
    padding: 45px 150px 63px;
    flex-direction: row;
  `};

  ${media(constants.breakpoints.desktop)`
    min-height: 400px;
    padding: 50px 250px 70px;
  `};
`;

export const StyledSpan = styled.span`
  font-size: calc(${constants.typography.fontSize.sm} + 2px);
  font-weight: ${constants.typography.fontWeight.bold};
  padding: 10px 0;

  &.read-less {
    border-bottom: 4px solid ${constants.colors.orange};
    padding: 7px 0;
  }

  ${media(constants.breakpoints.tablet)`
    padding: 13px 0;
    font-size: calc(${constants.typography.fontSize.sm} + 2px);
    &.read-less {
      padding: 10px 0;
    }
  `};

  ${media(constants.breakpoints.desktop)`
    padding: 10px 0;
    font-size: ${constants.typography.fontSize.md};
    &.read-less {
      padding: 12px 0;
    }
  `};
`;

export const ToggleIcon = styled(Img)`
  min-height: 30px;
  min-width: 30px;
  margin: 5px 10px 10px 15px;

  &.read-less {
    border: 4px solid ${constants.colors.orange};
    min-height: 40px;
    min-width: 40px;
    margin 2px 25px;

    img {
      padding: 3px;
    }
  }

  ${media(constants.breakpoints.tablet)`
    transform: rotate(90deg);
    min-height: 35px;
    min-width: 35px;
    margin: 5px 15px 15px 15px;

    &.read-less {
      border: 4px solid ${constants.colors.orange};
      min-height: 45px;
      min-width: 45px;
      margin 2px 25px;
  
      img {
        padding: 3px;
      }
    }
  `};

  ${media(constants.breakpoints.desktop)`
    min-height: 45px;
    min-width: 45px;
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
  `};
`;