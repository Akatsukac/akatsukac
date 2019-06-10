import * as React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import { graphql, StaticQuery } from 'gatsby';
import { 
  ColumnContainer,
  ColumnsContainer,
  ContactContainer,
  ContactIcon,
  StyledAnchor,
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
              <ColumnContainer>
                <StyledAnchor href='mailto:akatsukac@gmail.com' rel="noopener nofollower">
                  <ContactIcon fluid={data.email.childImageSharp.fluid} alt='email icon'/>
                  <StyledColumnHeader>Inquire</StyledColumnHeader>
                </StyledAnchor>
              </ColumnContainer>
              <ColumnContainer>
                <StyledAnchor href='https://www.linkedin.com/in/akatsukac/' target="__blank" rel="noopener nofollower">
                  <ContactIcon fluid={data.linkedin.childImageSharp.fluid} alt='linkedin icon'/>
                  <StyledColumnHeader>Connect</StyledColumnHeader>
                </StyledAnchor>
              </ColumnContainer>
              <ColumnContainer>
                <StyledAnchor href='https://github.com/Akatsukac/akatsukac' target="__blank" rel="noopener nofollower">
                  <ContactIcon fluid={data.github.childImageSharp.fluid} alt='github icon'/>
                  <StyledColumnHeader>Explore</StyledColumnHeader>
                </StyledAnchor>
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
