import * as React from 'react';
import { FunctionComponent } from "react";
import { graphql, StaticQuery } from 'gatsby';
import { GetProjectData } from '../../../typings/graphql';
import {
  ProjectContainer,
  CollapsibleContainer,
  ButtonContainer,
  LogoImg,
  StyledSpan
} from './Project.style';

interface IQueryProps {
  children: [],
  data: GetProjectData.Query
}

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

function Project(props: IQueryProps) {
  const { children, data } = props;
  if (!data || !data.expand || !data.expand.childImageSharp || !data.collapse || !data.collapse.childImageSharp) {
    console.warn(`Header: GraphQL returned a null on build.`);
  }
  let buttonState = {};
  
  return (
    <ProjectContainer className="project">
      {children}
      <CollapsibleContainer>
        <ButtonContainer className="active" onClick={(e:Event) => triggerEvent(e)}>
          <StyledSpan>READ&nbsp;MORE</StyledSpan>
          <LogoImg fluid={data.expand.childImageSharp.fluid} alt='expand'/>
        </ButtonContainer>
        <ButtonContainer className="inactive" onClick={(e:Event) => triggerEvent(e)}>
          <StyledSpan>READ&nbsp;LESS</StyledSpan>
          <LogoImg fluid={data.collapse.childImageSharp.fluid} alt='collapse'/>
        </ButtonContainer>
      </CollapsibleContainer>
    </ProjectContainer>
  );
};

const container: FunctionComponent = (props) => (
  <StaticQuery
    query={PROJECT_QUERY}
    render={data => <Project data={data} {...props}/>}
  />
);

export default container;

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