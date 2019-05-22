import Img from 'gatsby-image';
import styled from 'styled-components';

export const LogoImg = styled(Img)`
  min-height: 32px;
  min-width: 32px;
  margin: 5px;
`;

export const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0 24px;
    height: 56px;
    width: 100%;
    background-color: #0D1217;
    display: flex;
    justify-content: space-between;
`;

export const CopyrightSpan = styled.span`
    margin: auto 0;
    color: white;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 0.875rem;
`;

export const LinkContainer = styled.div`
    display: flex;
    margin: auto 0 auto auto;
`;