import * as React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { graphql, StaticQuery } from 'gatsby';
import {
  AboutContainer,
  ParagraphsContainer,
  Portrait,
  StyledHeader,
  StyledParagraph
} from './About.style';

export default class About extends React.Component {
  render() {
    return (
      <StaticQuery 
      query={ABOUT_QUERY}
      render={(data) => (
      <ScrollableSection hash={'about'}>
        <AboutContainer> 
          <Portrait fluid={data.about.childImageSharp.fluid} alt='about'/>
          <ParagraphsContainer>
            <StyledHeader>
              Aloha! I'm Chris.
            </StyledHeader>
            <StyledParagraph>                
              I grew up in Hawaii and graduated from the University of Pennsylvania 
              with a BSE and MSE in Computer and Information Science. I am currently a Senior Associate 
              Software Engineer at Capital One in Plano, Texas where I work on full stack projects.
            </StyledParagraph>
            <StyledParagraph>
              I have productionized multiple Python and Java microservices along with Angular 2+ web apps for work, so
              I built this website purely in React using the Gatsby framework to expand my skillset.
            </StyledParagraph>
            <StyledParagraph>
              In my free time, I enjoy powerlifting and collecting Funko pops. I recently lifted a meet PR for 1001lbs and 
              surpassed 250 Funko pops in my collection.
            </StyledParagraph>
          </ParagraphsContainer>
        </AboutContainer>
      </ScrollableSection>
      )}></StaticQuery>
    );
  }
}

const ABOUT_QUERY = graphql`
    query GetAboutData {
      about: file(relativePath: {eq: "images/headshot.jpg"}) {
        childImageSharp {
          fluid(maxHeight: 2625) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
`;
