import * as React from 'react';
import { FunctionComponent } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const Shell: FunctionComponent = ({children}) => {
    return (
      <>
        <Header>
        </Header>
        {children}
        <Footer>        
        </Footer>
      </>
    );
};

export default Shell;