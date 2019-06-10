import * as React from 'react';
import { FunctionComponent } from "react";
import SEO from "../utilities/seo";
import Shell from "../components/shell/Shell";

const NotFoundPage: FunctionComponent = () => (
  <Shell className="not-found">
    <SEO title="404: Not found" />
    <h1 className="not-found header">NOT FOUND</h1>
    <p className="not-found">You just hit a route that doesn&#39;t exist.</p>
  </Shell>
)

export default NotFoundPage;
