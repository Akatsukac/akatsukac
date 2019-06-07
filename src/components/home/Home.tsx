import * as React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { graphql, StaticQuery } from 'gatsby';
import { 
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
              <StyledHeader>CHRISTOPHER AKATSUKA</StyledHeader>
              <StyledSubheader>Full Stack Developer</StyledSubheader>
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