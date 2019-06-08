import * as React from 'react';
import { FunctionComponent } from 'react';
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import Shell from "../components/shell/Shell";
import SEO from "../utilities/seo";

const IndexPage: FunctionComponent = () => (
  <Shell>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home/>
    <Projects/>
    <About/>
    {/* <Contact/> */}
  </Shell>
)

export default IndexPage;
