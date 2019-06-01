import Img from 'gatsby-image';
import styled from 'styled-components';

export const LogoImg = styled(Img)`
  max-height: 100px;
  max-width: 100px;
  margin: auto;
`;

export const StyledH2 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #2D3739;
  flex-grow: 1;
`;

export const StyledH3 = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #2D3739;
`;

export const ContactContainer = styled.div`
    width: 100%;
    text-align: center;
    min-height: calc(100vh - 60px - 115px);
    display: flex;
    flex-direction: column;
`;

export const ColumnContainer = styled.div`
`;

export const ColumnsContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-around;
  padding: 30px 0;
  flex-grow: 2;
`;