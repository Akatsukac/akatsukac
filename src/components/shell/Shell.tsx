import * as React from 'react';
import { FunctionComponent } from "react";
import Footer from './footer/Footer';
import Header from './header/Header';
import { BodyContainerDiv } from './Shell.style';

const Shell: FunctionComponent = ({children}) => {
    return (
      <>
        <Header>
        </Header>
        <BodyContainerDiv>
          {children}
        </BodyContainerDiv>
        <Footer>        
        </Footer>
      </>
    );
};

export default Shell;