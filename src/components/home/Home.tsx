import * as React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import { 
  BackgroundImageStyles,
  StyledHeader,
  StyledSubheader,
  WelcomeContainer
} from './Home.style';
import ScrollableSection from 'react-update-url-on-scroll';

export default class Home extends React.Component {
  render() {
    return (
      <StaticQuery 
      query={HOME_QUERY}
      render={(data) => (
        <ScrollableSection hash={'home'}>
          <BackgroundImage style={BackgroundImageStyles} fluid={data.background.childImageSharp.fluid}>
            <WelcomeContainer>
              <StyledHeader>CHRISTOPHER&nbsp;AKATSUKA</StyledHeader>
              <StyledSubheader>SOFTWARE&nbsp;ENGINEER</StyledSubheader>
            </WelcomeContainer>
          </BackgroundImage>
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