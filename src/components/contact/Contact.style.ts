import constants from '../../styling/constants';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../styling/core';

export const ColumnsContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-around;
  padding: 30px 0;
  flex-grow: 1;
`;

export const ContactContainer = styled.div`
  padding: 60px 0;
  width: 100%;
  text-align: center;
  min-height: calc(100vh - ${constants.footer.height} - ${constants.header.height});
  display: flex;
  flex-direction: column;
`;

export const ContactIcon = styled(Img)`
  height: 50px;
  width: 50px;
  margin: auto;

  ${media(constants.breakpoints.tablet)`
    height: 100px;
    width: 100px;
  `};
`;

export const StyledColumnHeader = styled.h4`
  font-size: ${constants.typography.fontSize.sm};
  font-weight: ${constants.typography.fontWeight.bold};
  color: ${constants.colors.black};

  ${media(constants.breakpoints.desktop)`
    font-size: ${constants.typography.fontSize.md};
  `};
`;

export const StyledHeader = styled.h2`
  font-size: calc(${constants.typography.fontSize.md} - 6px);
  font-weight: ${constants.typography.fontWeight.bold};
  color: ${constants.colors.black};
  flex-grow: 1;

  ${media(constants.breakpoints.tablet)`
    font-size: ${constants.typography.fontSize.md};
  `};

  ${media(constants.breakpoints.desktop)`
    font-size: ${constants.typography.fontSize.lg};
  `};
`;
