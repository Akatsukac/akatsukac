import * as React from 'react';
import { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GetHeaderData } from '../../../typings/graphql';
import AppBar from '@material-ui/core/AppBar';
import { ScrollableLink } from 'react-update-url-on-scroll';

import { 
  LogoImg,
  ToolbarContainer,
  AppBarStylings,
  StyledSectionAnchor,
  LinkContainer,
  LinksContainer,
  StyledLogoAnchor
} from './Header.style';

interface IQueryProps {
  data: GetHeaderData.Query
}

function Header(props: IQueryProps) {
  const { data } = props;
  if (!data || !data.logo || !data.logo.childImageSharp) {
    console.warn(`Header: GraphQL returned a null on build.`);
  }
  return (
    <AppBar position="fixed" style={AppBarStylings}>
      <ToolbarContainer>
        <ScrollableLink href='#home'>
          <StyledLogoAnchor>
            <LogoImg fluid={data.logo.childImageSharp.fluid} alt='akatsukac logo'/>
          </StyledLogoAnchor>
        </ScrollableLink>
        <LinksContainer>
        <LinkContainer>
            <ScrollableLink href='#home'>
              <StyledSectionAnchor className="section-anchor" id="home">HOME</StyledSectionAnchor>
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
        </LinksContainer>
      </ToolbarContainer>
    </AppBar>
  );
}

const container: FunctionComponent = props => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => <Header data={data} {...props}/>}
  />
);

export default container;

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