import * as React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { graphql, StaticQuery } from 'gatsby';
import { 
  LogoImg,
  ContactContainer,
  ColumnContainer,
  ColumnsContainer,
  StyledH2,
  StyledH3
} from './Contact.style';

export default class About extends React.Component {
  render() {
    return (
      <StaticQuery 
      query={CONTACT_QUERY}
      render={(data) => (
        <ScrollableSection hash={'contact'}>
          <ContactContainer>
            <StyledH2>Get In Touch</StyledH2>
            <ColumnsContainer>
              <ColumnContainer>
                <a href='mailto:akatsukac@gmail.com' rel="noopener nofollower">
                  <LogoImg fluid={data.email.childImageSharp.fluid} alt='email icon'/>
                </a>
                <StyledH3>Inquire</StyledH3>
              </ColumnContainer>
              <ColumnContainer>
                <a href='https://www.linkedin.com/in/akatsukac/' target="__blank" rel="noopener nofollower">
                  <LogoImg fluid={data.linkedin.childImageSharp.fluid} alt='linkedin icon'/>
                </a>
                <StyledH3>Connect</StyledH3>
              </ColumnContainer>
              <ColumnContainer>
                <a href='https://github.com/Akatsukac/akatsukac' target="__blank" rel="noopener nofollower">
                  <LogoImg fluid={data.github.childImageSharp.fluid} alt='github icon'/>
                </a>
                <StyledH3>Explore</StyledH3>
              </ColumnContainer>
            </ColumnsContainer>
          </ContactContainer>
        </ScrollableSection>
      )}></StaticQuery>
    );
  }
}
  
const CONTACT_QUERY = graphql`
  query GetContactData {
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
