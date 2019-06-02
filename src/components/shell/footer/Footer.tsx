import * as React from 'react';
import { FunctionComponent } from "react";
import { 
  CopyrightSpan,
  FooterContainer 
} from './Footer.style';

const Footer: FunctionComponent = () => (
  (
    <FooterContainer>
      <CopyrightSpan>© Christopher Akatsuka 2019</CopyrightSpan>
    </FooterContainer>
  )
)

export default Footer;
