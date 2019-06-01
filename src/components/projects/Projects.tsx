import * as React from 'react';
import Project from './project/Project';
import ScrollableSection from 'react-update-url-on-scroll';
import {
  StyledProjectHeader,
  StyledParagraph,
  StyledProjectsContainer
} from './Projects.style';

export default class Projects extends React.Component {
  render() {
    return (
      <ScrollableSection hash={'projects'}>
        <StyledProjectsContainer>
          <Project>
            <StyledProjectHeader>
              Breaking Up The Monolith
            </StyledProjectHeader>
            <StyledParagraph>
              As software lead, I worked with four software engineers to build towards a micro frontend
              target state that reduced deployment times from six hours to 20 minutes.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              At Capital One, we have a web application called "Dealer Navigator" that allows auto dealers
              to fund their customers' auto loans. The document upload section, one of the core services offered,
              receives hundreds of thousands of visitors per day and generates over a billion dollars in revenue
              per year. Unfortunately, the application became a monolith over the years and desperately needed
              its tech debt addressed.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">              
              I led the effort in building an Angular micro frontend with a dedicated backend for frontend 
              for the document upload section. In addition to a normal developer workload, I reviewed pull
              requests, led architecture discussions, and provided one-on-one mentorship sessions. By the end of 
              the project, we achieved our goal of having a modular and refactored codebase for our 
              frontend and backend.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              Beyond dockerization and migrating code out of the monolith, I made many technical improvements.
              I hosted the dockerized containers on Amazon Web Services ECS cluster, automated the run of perf
              and functional tests before each release, and added route guards to prevent URL tampering. I also
              made many code improvements such as moving all application logic to the BFF layer, updating 
              deprecated dependencies, and improving test coverage that surpassed company standards.
            </StyledParagraph>
          </Project>
          <Project>
            <StyledProjectHeader>
              Piloting A New Experience
            </StyledProjectHeader>
            <StyledParagraph>
              I rebuilt a business-critical Angular web app with loan funding requirements, document classification,
              and a PDFJS document previewer, resulting in a 15% increase in dealerships leveraging the web app over
              mail and fax.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              I built a document previewer with PDFJS, integrated NGRX for maintaining component
              state across different pages, and built banners and tables to support dealer funding 
              requirements. In order to fully leverage all of PDFJS's features, I built a Lambda function
              on Amazon Web Services that created a PDF copy of every image uploaded to S3. The document previewer
              could then leverage the PDF copy, which provided all of PDFJS's features across all browser types.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              Through this project, I learned how to build responsive pages that could work across all 
              modern browsers. I had to learn about break points, polyfills, and the wonders of caniuse.com.
              Sauce Labs in conjunction with the Selenium web driver allowed me to quickly test my pages
              across supported browsers very quickly.
            </StyledParagraph>
          </Project>
          <Project>
            <StyledProjectHeader>
              Clearing Up The Confusion
            </StyledProjectHeader>
            <StyledParagraph>
              I architected and developed a Java Spring Boot REST API that allows Capital One funders
              to specify loan funding requirements directly to customers, reducing the number of 
              applications with missing documents by 55%.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              I leveraged the Builder pattern to program business logic into readable and maintainable classes.
              This allowed me to separate the logic for universal requirements, special requirements due to 
              application parameters, and custom requirements created by funders. 
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              Dealers responded to these changes with overwhelming feedback and helped to
              improve the number of "clean deals" (deals that provided all required documentation on the
              first try).
            </StyledParagraph>
          </Project>
          <Project>
            <StyledProjectHeader>
              Building A Document Classification/Extraction Pipeline
            </StyledProjectHeader>
            <StyledParagraph>
              I replaced a manual document classification process with an event-driven Python microservice
              pipeline on AWS that classifies 1 million documents per day in less than 10 seconds per page,
              saving $6 million annually.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              I built the image preprocessing Python microservice. The dockerized image preprocessing 
              tool leveraged OpenCV to grayscale images, convert files to jpeg, and perform content isolation
              transformations to increase accuracy. We deployed the container on an Amazon Web Services 
              ECS cluster. When an upload occurred, our orchestrator placed a message in
              an SQS queue, which my preprocessing service consumed. 
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              Upon completion, my service saved the processed image in an S3 bucket and placed
              a message for the next microservice in our pipeline to consume.  In the event of failure,
              we retried up to three times and if the failure still occurred, we placed a message
              in a dead letter queue for manual review.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              I also built an Angular 4 re-classification tool to help with the retraining of our 
              classification model.  Users could see uploaded images alongside their classification.
              The user could then select the correct classification and these new labels could then 
              contribute directly to our next model retraining to help improve accuracy.
            </StyledParagraph>
          </Project>
        </StyledProjectsContainer>
      </ScrollableSection>
    );
  }
};
