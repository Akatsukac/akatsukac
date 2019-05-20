import * as React from 'react';
import { FunctionComponent } from "react";
import { graphql, StaticQuery } from 'gatsby';
import { GetBackgroundImage } from '../../typings/graphql';
import { 
  BackgroundContent,
  WelcomeContainer
} from './Home.style';

interface IQueryProps {
  data: GetBackgroundImage.Query
}

function Home(props: IQueryProps) {
  const { data } = props;
  if (!data || !data.background || !data.background.childImageSharp) {
    console.warn(`Header: GraphQL returned a null on build.`);
  }
  return (
    <BackgroundContent fluid={data.background.childImageSharp.fluid}>
      <WelcomeContainer>
        <h1>Christopher Akatsuka</h1>
        <h2>Software Engineer</h2>
      </WelcomeContainer>
    </BackgroundContent>
  );
}

const container: FunctionComponent = props => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => <Home data={data} {...props}/>}
  />
);

export default container;

const HEADER_QUERY = graphql`
    query GetBackgroundImage {
        background: file(relativePath: {eq: "images/background.jpg"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;