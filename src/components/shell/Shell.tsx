import * as React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import { 
  ChildrenContainer,
  ShellContainer
} from './Shell.style';
import { FunctionComponent } from 'react';

const Shell: FunctionComponent = ({children}) => {
  if (children === null || children[1] === null) {
    console.error("No children elements passed!");
  }
  return (
    <ShellContainer className={children[1].props.className}>
      <Header>
      </Header>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
      <Footer>        
      </Footer>
    </ShellContainer>
  );
};

export default Shell;