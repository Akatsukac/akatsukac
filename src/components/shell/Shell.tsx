import * as React from 'react';
import { FunctionComponent } from "react";
import Footer from './footer/Footer';
import Navbar from './header/Header';

const Shell: FunctionComponent = () => {
    return (
      <>
        <Navbar>
        </Navbar>
        Hello World
        <Footer>
        </Footer>
      </>
    );
};

export default Shell;