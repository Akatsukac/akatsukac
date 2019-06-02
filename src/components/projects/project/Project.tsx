import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { triggerEvent } from './Project.service';
import {
  ButtonContainer,
  CollapsibleContainer,
  LogoImg,
  ProjectContainer,
  StyledSpan
} from './Project.style';

export default class Project extends React.Component {
  render() {
    return (
      <StaticQuery 
      query={PROJECT_QUERY}
      render={(data) => (
        <ProjectContainer className="project">
          <div>
            {this.props.children}
          </div>
          <CollapsibleContainer>
            <ButtonContainer className="active" onClick={(e:React.MouseEvent) => triggerEvent(e)}>
              <StyledSpan className="read-more">READ&nbsp;MORE</StyledSpan>
              <LogoImg fluid={data.expand.childImageSharp.fluid} alt='expand'/>
            </ButtonContainer>
            <ButtonContainer className="inactive" onClick={(e:React.MouseEvent) => triggerEvent(e)}>
              <StyledSpan className="read-less">READ&nbsp;LESS</StyledSpan>
              <LogoImg className="read-less" fluid={data.collapse.childImageSharp.fluid} alt='collapse'/>
            </ButtonContainer>
          </CollapsibleContainer>
        </ProjectContainer>
      )}></StaticQuery>
    );
  }
}

const PROJECT_QUERY = graphql`
    query GetProjectData {
      expand: file(relativePath: {eq: "images/icons/expand_icon.png"}) {
        childImageSharp {
          fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      collapse: file(relativePath: {eq: "images/icons/collapse_icon.png"}) {
        childImageSharp {
          fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
`;