import * as React from 'react';
import { FunctionComponent } from "react";
import Home from "../components/home/Home";
import Shell from "../components/shell/Shell";
import SEO from "../components/utilities/seo";

const IndexPage: FunctionComponent = () => (
  <Shell>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home/>
  </Shell>
)

export default IndexPage;
