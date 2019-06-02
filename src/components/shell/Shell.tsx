import * as React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { FunctionComponent } from 'react';

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