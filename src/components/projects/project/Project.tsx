import * as React from 'react';
import { FunctionComponent } from "react";
import {
  ChildrenContainer
} from './Project.style';

const Project: FunctionComponent = ({children}) => {
    return (
      <ChildrenContainer>
        {children}
        <span>
          READ MORE
        </span>
        <span>
          READ LESS
        </span>

      </ChildrenContainer>
    );
};

export default Project;