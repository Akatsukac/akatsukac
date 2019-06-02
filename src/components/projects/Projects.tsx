import * as React from 'react';
import Project from './project/Project';
import ScrollableSection from 'react-update-url-on-scroll';
import { projectContent } from './Projects.constants';
import {
  ProjectsContainer,
  StyledHeader,
  StyledParagraph,
  StyledSubheader
} from './Projects.style';

export default class Projects extends React.Component {
  createProjects = () => {
    let projects = [];

    for (let i = 0; i < projectContent.length; i++) {
      let project = [];
      let content = projectContent[i];
      project.push(<StyledHeader key={"header-" + i}>{content.title}</StyledHeader>);
      project.push(<StyledSubheader key={"summary-" + i}>Summary</StyledSubheader>);
      project.push(<StyledParagraph key={"summary-content-" + i}>{content.summary}</StyledParagraph>);
      project.push(<StyledSubheader className="collapsible-content collapsed" key={"details-" + i}>Technical Details</StyledSubheader>);
      let paragraphs = content.paragraphs;

      for (let j = 0; j < paragraphs.length; j++) {
        project.push(<StyledParagraph className="collapsible-content collapsed" key={"details-content-" + j}>{paragraphs[j]}</StyledParagraph>);
      }
      projects.push(<Project key={"project-" + i}>{project}</Project>);
    }
    return projects;
  }

  render() {
    return (
      <ScrollableSection hash={'projects'}>
        <ProjectsContainer>
          {this.createProjects()}
        </ProjectsContainer>
      </ScrollableSection>
    );
  }
};
