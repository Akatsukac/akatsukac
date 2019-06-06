import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { graphql, StaticQuery } from 'gatsby';
import { ScrollableLink } from 'react-update-url-on-scroll';
import { 
  AppBarStylings,
  HeaderContainer,
  LinkContainer,
  LinksContainer,
  LogoIcon,
  StyledLogoAnchor,
  StyledSectionAnchor
} from './Header.style';

export default class Header extends React.Component {
  render() {
    return (
      <StaticQuery 
      query={HEADER_QUERY}
      render={(data) => (
        <AppBar position="fixed" style={AppBarStylings}>
          <HeaderContainer>
            <ScrollableLink href='#home'>
              <StyledLogoAnchor>
                <LogoIcon fluid={data.logo.childImageSharp.fluid} alt='akatsukac logo'/>
              </StyledLogoAnchor>
            </ScrollableLink>
            <LinksContainer>
            <LinkContainer>
                <ScrollableLink href='#home'>
                  <StyledSectionAnchor className="section-anchor selected" id="home">HOME</StyledSectionAnchor>
                </ScrollableLink>
              </LinkContainer>         
              <LinkContainer>
                <ScrollableLink href='#projects'>
                  <StyledSectionAnchor className="section-anchor" id="projects">PROJECTS</StyledSectionAnchor>
                </ScrollableLink>
              </LinkContainer>
              <LinkContainer>
                <ScrollableLink href='#about'>
                  <StyledSectionAnchor className="section-anchor" id="about">ABOUT</StyledSectionAnchor>
                </ScrollableLink>
              </LinkContainer> 
              <LinkContainer>
                <ScrollableLink href='#contact'>
                  <StyledSectionAnchor className="section-anchor" id="contact">CONTACT</StyledSectionAnchor>
                </ScrollableLink>
              </LinkContainer>
            </LinksContainer>
          </HeaderContainer>
        </AppBar>
      )}></StaticQuery>
      );
    }
  }

const HEADER_QUERY = graphql`
    query GetHeaderData {
        logo: file(relativePath: {eq: "images/logo.png"}) {
            childImageSharp {
                fluid(maxHeight: 300) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;