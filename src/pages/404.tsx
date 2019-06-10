import * as React from 'react';
import { FunctionComponent } from "react";
import Shell from "../components/shell/Shell";
import SEO from "../utilities/seo";

const NotFoundPage: FunctionComponent = () => (
  <Shell>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Shell>
)

export default NotFoundPage
