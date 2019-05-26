import * as React from 'react';
import { FunctionComponent } from "react";
import { graphql, StaticQuery } from 'gatsby';
import { GetFooterData } from '../../../typings/graphql';
import { 
  LogoImg,
  FooterContainer, 
  CopyrightSpan,
  LinkContainer
} from './Footer.style';


interface IQueryProps {
  data: GetFooterData.Query
}

function Footer(props: IQueryProps) {
  const { data } = props;
  if (!data || !data.email || !data.email.childImageSharp || !data.linkedin || !data.linkedin.childImageSharp 
    || !data.github || !data.github.childImageSharp) {
    console.warn(`Footer: GraphQL returned a null on build.`);
  }
  return (
    <FooterContainer>
      <CopyrightSpan>© Christopher Akatsuka 2019</CopyrightSpan>
      <LinkContainer>
        <a href='mailto:akatsukac@gmail.com' rel="noopener nofollower">
          <LogoImg fluid={data.email.childImageSharp.fluid} alt='email icon'/>
        </a>
        <a href='https://www.linkedin.com/in/akatsukac/' target="__blank" rel="noopener nofollower">
          <LogoImg fluid={data.linkedin.childImageSharp.fluid} alt='linkedin icon'/>
        </a>
        <a href='https://github.com/Akatsukac/akatsukac' target="__blank" rel="noopener nofollower">
          <LogoImg fluid={data.github.childImageSharp.fluid} alt='github icon'/>
        </a>
      </LinkContainer>
    </FooterContainer>
  );
}

const container: FunctionComponent = props => (
  <StaticQuery
    query={FOOTER_QUERY}
    render={data => <Footer data={data} {...props}/>}
  />
);

export default container;

const FOOTER_QUERY = graphql`
  query GetFooterData {
    email: file(relativePath: {eq: "images/icons/email_icon.png"}) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    linkedin: file(relativePath: {eq: "images/icons/linkedin_icon.png"}) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    github: file(relativePath: {eq: "images/icons/github_icon.png"}) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
