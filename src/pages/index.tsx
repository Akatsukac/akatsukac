import * as React from 'react';
import { FunctionComponent } from 'react';
import Home from "../components/home/Home";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Shell from "../components/shell/Shell";
import SEO from "../components/utilities/seo";

const IndexPage: FunctionComponent = () => (
  <Shell>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home/>
    <Projects/>
    <About/>
  </Shell>
)

export default IndexPage;
