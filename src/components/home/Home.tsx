import * as React from 'react';
import constants from '../../styling/constants';
import BackgroundImage from 'gatsby-background-image';
import ScrollableSection from 'react-update-url-on-scroll';
import { graphql, StaticQuery } from 'gatsby';
import { 
  DesktopBackgroundStyles,
  MobileBackgroundStyles,
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
          <BackgroundImage style={DesktopBackgroundStyles} fluid={data.background.childImageSharp.fluid}> 
            <WelcomeContainer>
              <StyledHeader>CHRISTOPHER&nbsp;AKATSUKA</StyledHeader>
              <StyledSubheader>Full&nbsp;Stack&nbsp;Developer</StyledSubheader>
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