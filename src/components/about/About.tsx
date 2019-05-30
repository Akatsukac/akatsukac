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
  ButtonStyles
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
                  Hello! My name is Christopher Akatsuka and thank you for visiting my website. I graduated from
                  the University of Pennsylvania in 2016 with a BSE in Computer and Information Science and
                  in 2017 with my MSE in Computer and Information Science. I'm currently a Senior Associate
                  Software Engineer at Capital One in Plano, Texas where I work on full stack projects.
                </StyledParagraph>
                <StyledParagraph>
                  I have productionized multiple Python and Java microservices along with Angular 2+ web apps. I've done
                  my best to summarize these efforts in my projects section above, but feel free to contact me if you
                  have any questions.  I learn quickly and am very flexible in frameworks and programming languages. I built
                  this website purely in React in order to challenge myself and to demonstrate that I'm not tied to any particular
                  language or framework.
                </StyledParagraph>
                <StyledParagraph>
                  Beyond tech, I enjoy opportunities to lead. Recently, I served as a software lead for two separate projects
                  where I regularly reviewed code, provided guidance on the productionizing process, and negotiated with 
                  Product and Design to produce high quality results on time.
                </StyledParagraph>
                <StyledParagraph>
                  In my free time, I enjoy powerlifting and collecting Funko pops. I recently lifted a meet PR for 1001lbs and 
                  have just surpassed 225 Funko pops.
                </StyledParagraph>
              </StyledParagraphContainer>
            </StyledContentContainer>
              <a href="Final-Akatsuka-Resume.pdf" download>
                <Button variant="contained" size="large" color="primary" style={ButtonStyles}>
                  DOWNLOAD RESUME
                </Button>
              </a>
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
          fluid(maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
`;
