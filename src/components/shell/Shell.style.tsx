import constants from '../../styling/constants';
import styled from 'styled-components';

export const ChildrenContainer = styled.div`
  min-height: calc(100vh - ${constants.header.height} + 17px);

  .not-found {
    text-align: center;
  }

  .not-found.header {
    padding-top: calc(50vh - ${constants.header.height} + 17px);
  }
`;

export const ShellContainer = styled.div`
  &.not-found {

    header {
      background-color: ${constants.colors.black} !important;
    }
    
    .link-section {
      display: none;
    }
  }
`;