import * as React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { graphql, StaticQuery } from 'gatsby';
import { 
  ResumeButton,
  StyledAnchor,
  StyledBackgroundImage,
  StyledHeader,
  StyledSubheader,
  WelcomeContainer
} from './Home.style';

export default class Home extends React.Component {

  render() {
    return (
      <StaticQuery 
      query={HOME_QUERY}
      render={(data) => (
        <ScrollableSection hash={'home'}>
          <StyledBackgroundImage fluid={data.background.childImageSharp.fluid}> 
            <WelcomeContainer>
              <StyledSubheader>Full Stack Developer</StyledSubheader>
              <StyledHeader>CHRISTOPHER AKATSUKA</StyledHeader>
              <StyledAnchor href="https://github.com/Akatsukac/akatsukac/raw/master/src/assets/docs/Final-Akatsuka-Resume.pdf" download>
                <ResumeButton variant="outlined" size="large">
                  DOWNLOAD RESUME
                </ResumeButton>
            </StyledAnchor>
            </WelcomeContainer>
          </StyledBackgroundImage>
        </ScrollableSection>
      )}></StaticQuery>
    );
  }
}

const HOME_QUERY = graphql`
    query GetBackgroundImage {
        background: file(relativePath: {eq: "images/background.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;