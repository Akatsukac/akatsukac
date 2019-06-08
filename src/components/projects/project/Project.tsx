import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { triggerEvent } from './Project.service';
import {
  ButtonContainer,
  ChildrenContainer,
  CollapsibleContainer,
  ProjectContainer,
  StyledSpan,
  ToggleIcon
} from './Project.style';

export default class Project extends React.Component {
  render() {
    return (
      <StaticQuery 
      query={PROJECT_QUERY}
      render={(data) => (
        <ProjectContainer className="project">
          <ChildrenContainer>
            {this.props.children}
          </ChildrenContainer>
          <CollapsibleContainer>
            <ButtonContainer className="active" onClick={(e:React.MouseEvent) => triggerEvent(e)}>
              <StyledSpan className="read-more">READ&nbsp;MORE</StyledSpan>
              <ToggleIcon fluid={data.expand.childImageSharp.fluid} alt='expand'/>
            </ButtonContainer>
            <ButtonContainer className="inactive container-less" onClick={(e:React.MouseEvent) => triggerEvent(e)}>
              <StyledSpan className="read-less">READ&nbsp;LESS</StyledSpan>
              <ToggleIcon className="read-less" fluid={data.collapse.childImageSharp.fluid} alt='collapse'/>
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