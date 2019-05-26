import * as React from 'react';
import { FunctionComponent } from "react";
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { GetBackgroundImage } from '../../typings/graphql';
import { 
  BackgroundImageStyles,
  WelcomeContainer
} from './Home.style';
import ScrollableSection from 'react-update-url-on-scroll';


interface IQueryProps {
  data: GetBackgroundImage.Query
}

function Home(props: IQueryProps) {
  const { data } = props;
  if (!data || !data.background || !data.background.childImageSharp) {
    console.warn(`Header: GraphQL returned a null on build.`);
  }
  return (
    <ScrollableSection hash={'home'}>
      <BackgroundImage style={BackgroundImageStyles} fluid={data.background.childImageSharp.fluid}>
        <WelcomeContainer>
          <h1>CHRISTOPHER&nbsp;AKATSUKA</h1>
          <h2>SOFTWARE&nbsp;ENGINEER</h2>
        </WelcomeContainer>
      </BackgroundImage>
    </ScrollableSection>
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