import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  ButtonContainer,
  CollapsibleContainer,
  LogoImg,
  ProjectContainer,
  StyledSpan
} from './Project.style';

function toggleClasses(parent: HTMLElement) {
  // Collapsible button: inactive has display none
  let activeElems = parent.getElementsByClassName("active");
  let inactiveElems = parent.getElementsByClassName("inactive");
  let activeElem = activeElems[0];
  let inactiveElem = inactiveElems[0];
  activeElem.classList.add("inactive");
  activeElem.classList.remove("active");
  inactiveElem.classList.add("active");
  inactiveElem.classList.remove("inactive");
  
  // Collapsible paragraphs
  if (parent.parentElement === null) {
    return;
  }

  let collapsibleContentList = parent.parentElement.getElementsByClassName("collapsible-content");

  for (let i = 0; i < collapsibleContentList.length; i++) {
    let collapsibleContent = collapsibleContentList[i];
    if (collapsibleContent.classList.contains("collapsed")) {
      collapsibleContent.classList.add("visible");
      collapsibleContent.classList.remove("collapsed");
    } else {
      collapsibleContent.classList.add("collapsed");
      collapsibleContent.classList.remove("visible");
    }
  }
}

function triggerEvent(e:Event) {
  let button = e.currentTarget as HTMLElement;
  let parent = button.parentElement;
  if (parent !== null && parent.parentElement !== null) {
    toggleClasses(parent);
  }
}

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
            <ButtonContainer className="active" onClick={(e:Event) => triggerEvent(e)}>
              <StyledSpan className="read-more">READ&nbsp;MORE</StyledSpan>
              <LogoImg fluid={data.expand.childImageSharp.fluid} alt='expand'/>
            </ButtonContainer>
            <ButtonContainer className="inactive" onClick={(e:Event) => triggerEvent(e)}>
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