import * as React from 'react';
import { FunctionComponent } from "react";
import { graphql, StaticQuery } from 'gatsby';
import { GetProjectData } from '../../../typings/graphql';
import {
  ProjectContainer,
  ChildrenContainer,
  CollapsibleContainer,
  ButtonContainer,
  LogoImg,
  StyledSpan
} from './Project.style';

interface IQueryProps {
  children: [],
  data: GetProjectData.Query
}

function Project(props: IQueryProps) {
  const { children, data } = props;
  if (!data || !data.expand || !data.expand.childImageSharp || !data.collapse || !data.collapse.childImageSharp) {
    console.warn(`Header: GraphQL returned a null on build.`);
  }
  return (
    <ProjectContainer>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
      <CollapsibleContainer>
        {false && (<ButtonContainer>
          <StyledSpan>READ&nbsp;MORE</StyledSpan>
          <LogoImg fluid={data.expand.childImageSharp.fluid} alt='expand'/>
        </ButtonContainer>)}
        {true && (<ButtonContainer>
          <StyledSpan>READ&nbsp;LESS</StyledSpan>
          <LogoImg fluid={data.collapse.childImageSharp.fluid} alt='collapse'/>
        </ButtonContainer>)}
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