import * as React from 'react';
import { FunctionComponent } from "react";
import { graphql, Link, StaticQuery } from 'gatsby';
import { GetHeaderData } from '../../../typings/graphql';
import AppBar from '@material-ui/core/AppBar';

import { 
  LogoImg,
  ToolbarContainer,
  AppBarStylings,
  StyledLink,
  LinkContainer,
  LinksContainer
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
        <Link to='/'>
          <LogoImg fluid={data.logo.childImageSharp.fluid} alt='akatsukac logo'/>
        </Link>
        <LinksContainer>
          <LinkContainer>
            <StyledLink to='#projects'>Projects</StyledLink>
          </LinkContainer>
          <LinkContainer>
            <StyledLink to='#about'>About Me</StyledLink>
          </LinkContainer>
          <LinkContainer>
            <StyledLink to='#contact'>Contact</StyledLink>
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