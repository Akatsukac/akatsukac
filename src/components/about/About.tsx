import * as React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { graphql, StaticQuery } from 'gatsby';
import Button from '@material-ui/core/Button';
import {
  StyledAboutContainer,
  LogoImg,
  StyledParagraphContainer,
  StyledParagraph,
  StyledContentContainer,
  ButtonStyles,
  StyledAnchor
} from './About.style';

export default class About extends React.Component {
  render() {
    return (
      <StaticQuery 
      query={PROJECT_QUERY}
      render={(data) => (
      <ScrollableSection hash={'about'}>
        <StyledAboutContainer> 
            <StyledContentContainer>
              <LogoImg fluid={data.about.childImageSharp.fluid} alt='about'/>
              <StyledParagraphContainer>
                <StyledParagraph>
                  Hello, I am Christopher Akatsuka and thank you for visiting my website. I graduated from
                  the University of Pennsylvania in 2016 with a BSE in Computer and Information Science and
                  in 2017 with my MSE in Computer and Information Science. I am currently a Senior Associate
                  Software Engineer at Capital One in Plano, Texas where I work on full stack projects.
                </StyledParagraph>
                <StyledParagraph>
                  I have productionized multiple Python and Java microservices along with Angular 2+ web apps for work, so
                  I decided to change it up and build this website purely in React using the Gatsby framework in order to
                  challenge myself.
                </StyledParagraph>
                <StyledParagraph>
                  In my free time, I enjoy powerlifting and collecting Funko pops. I recently lifted a meet PR for 1001lbs and 
                  surpassed 250 Funko pops.
                </StyledParagraph>
              </StyledParagraphContainer>
            </StyledContentContainer>
              <StyledAnchor href="https://github.com/Akatsukac/akatsukac/raw/master/src/assets/docs/Final-Akatsuka-Resume.pdf" download>
                <Button variant="outlined" size="large" style={ButtonStyles}>
                  DOWNLOAD RESUME
                </Button>
              </StyledAnchor>
        </StyledAboutContainer>
      </ScrollableSection>
      )}></StaticQuery>
    );
  }
}

const PROJECT_QUERY = graphql`
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
