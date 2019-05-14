import Img from 'gatsby-image';
import styled from 'styled-components';

export const LogoImg = styled(Img)`
  min-height: 32px;
  min-width: 32px;
  margin: 5px;
`;

export const FooterContainer = styled.div`
    padding: 0 24px;
    height: 56px;
    width: 100%;
    background-color: #3f51b5;
    display: grid;
    justify-items:center;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const CopyrightSpan = styled.span`
    grid-column-start: 2;
    margin: auto 0;
    color: #fff;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 0.875rem;
`;

export const LinkContainer = styled.div`
    grid-column-start: 3;
    display: flex;
    margin: auto 0 auto auto;
`;