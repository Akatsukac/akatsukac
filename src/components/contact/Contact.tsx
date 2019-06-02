import * as React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { graphql, StaticQuery } from 'gatsby';
import { 
  ColumnsContainer,
  ContactContainer,
  ContactIcon,
  StyledColumnHeader,
  StyledHeader
} from './Contact.style';

export default class About extends React.Component {
  render() {
    return (
      <StaticQuery 
      query={CONTACT_QUERY}
      render={(data) => (
        <ScrollableSection hash={'contact'}>
          <ContactContainer>
            <StyledHeader>Get In Touch</StyledHeader>
            <ColumnsContainer>
              <div>
                <a href='mailto:akatsukac@gmail.com' rel="noopener nofollower">
                  <ContactIcon fluid={data.email.childImageSharp.fluid} alt='email icon'/>
                </a>
                <StyledColumnHeader>Inquire</StyledColumnHeader>
              </div>
              <div>
                <a href='https://www.linkedin.com/in/akatsukac/' target="__blank" rel="noopener nofollower">
                  <ContactIcon fluid={data.linkedin.childImageSharp.fluid} alt='linkedin icon'/>
                </a>
                <StyledColumnHeader>Connect</StyledColumnHeader>
              </div>
              <div>
                <a href='https://github.com/Akatsukac/akatsukac' target="__blank" rel="noopener nofollower">
                  <ContactIcon fluid={data.github.childImageSharp.fluid} alt='github icon'/>
                </a>
                <StyledColumnHeader>Explore</StyledColumnHeader>
              </div>
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
