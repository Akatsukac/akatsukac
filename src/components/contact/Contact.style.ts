import constants from '../../styling/constants';
import Img from 'gatsby-image';
import styled from 'styled-components';

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
  height: 100px;
  width: 100px;
  margin: auto;
`;

export const StyledColumnHeader = styled.h3`
  font-size: ${constants.typography.fontSize.md};
  font-weight: ${constants.typography.fontWeight.bold};
  color: ${constants.colors.black};
`;

export const StyledHeader = styled.h2`
  font-size: ${constants.typography.fontSize.lg};
  font-weight: ${constants.typography.fontWeight.bold};
  color: ${constants.colors.black};
  flex-grow: 1;
`;
