import * as React from 'react';
import { FunctionComponent } from "react";

const Project: FunctionComponent = ({children}) => {
    return (
      <>
        <div>
          {children}
          <span>
            READ MORE
          </span>
          <span>
            READ LESS
          </span>

        </div>

      </>
    );
};

export default Project;