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
              Python Microservice Pipeline
            </StyledProjectHeader>
            <StyledParagraph>
              Every year, Capital One spends billions of dollars paying a third party service to perform
              manual classification and extraction of uploaded dealer documents.  By utilizing 
              open source text extraction engine and image classifier, my team built a python microservice
              pipeline that classified and extracted individual pages. 
              
              I built the image preprocessing Python microservice. The dockerized image preprocessing 
              tool leveraged OpenCV to grayscale images, convert files to jpeg, and perform content isolation
              transformations to increase accuracy. We deployed the container on Amazon Web Services' 
              Elastic Container Service. When an upload occurred, our orchestrator placed a message in
              a Simple Queue Service queue, which my preprocessing service consumed. 

              Upon completion, my service saved the processed image in an S3 bucket and placed
              a message for the next microservice in our pipeline to consume.  In the event of failure,
              we retried up to three times and if the failure still occurred, we placed a message
              in a dead letter queue for manual review.

              I also built an Angular 4 re-classification tool to help with the retraining of our 
              classification model.  Users could see uploaded images alongside their classification.
              The user could then select the correct classification and these new labels could then 
              contribute directly to our next model retraining to help improve accuracy.
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              In order to design an asynchronous service that could handle massive scale while also gracefully
              failing, I looked towards Amazon Web Services' cloud offerings.  I earned my Amazon Web Service
              certification during the process of scoping out appropriate services to leverage.

              I experimented with OpenCV while reading deep into its documentation in order to determine
              the best image transformations that would help improve classification and extraction accuracy
              while still meeting runtime SLA's. 
            </StyledParagraph>
          </Project>
          <Project>
            <StyledProjectHeader>
              Funding Requirements API
            </StyledProjectHeader>
            <StyledParagraph>
              Dealers did not like guessing about what they needed to fund a deal. Wasted time
              meant lost profits.  In response, I designed and built a Java Spring Boot microservice
              that called downstream API's to produce a list of specific and meaningful requirements
              tailored to each application. Capital One lenders could now also provide specific
              requirements on top of these generated requirements to address special scenarios.
              Dealer feedback came back overwhelmingly positive and helped to improve the number 
              of "clean deals" (deals that provided all required documentation on the first try).
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              I leveraged the Builder pattern to programming business logic into readable and maintainable classes.
              This allowed me to separate the logic for universal requirements and special requirements due to 
              application parameters. This made unit and functional testing much easier.
            </StyledParagraph>
          </Project>
          <Project>
            <StyledProjectHeader>
              Dealer Navigator - Fast Funding Pilot
            </StyledProjectHeader>
            <StyledParagraph>
              Leveraging AngularJS and Angular 4, I re-imagined the hybrid angular app that
              millions of car dealers used everyday to upload documents required for their
              auto loan applications.  I built a document previewer with PDFJS, integrated
              NGRX for maintaining component state across different pages, and built banners
              and tables to support dealer funding requirements. I embraced opportunities to 
              demo to dealers and iterated on their feedback.  
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              I utilized Amazon Web Services' S3 data replication to achieve active-passive resiliency.
              This meant that in the event of failure in one region, we could simply switch route 53 
              url's and the failover region would have the same images stored for previewing purposes.  

              I handled the many different file types dealers provided by building Amazon Web Service 
              Lambda function that created a PDF copy of every image uploaded to S3. The document previewer
              could then leverage the PDF copy, which provided all of PDFJS's features across all browser types.

              Through this project, I learned how to build responsive pages that could work across all 
              modern browsers. I had to learn about break points, polyfills, and the wonders of caniuse.com.
              Sauce Labs in conjunction with the Selenium web driver allowed me to quickly test my pages
              across supported browsers very quickly.
            </StyledParagraph>
          </Project>
          <Project>
            <StyledProjectHeader>
              Dealer Navigator - Micro Frontend Target State
            </StyledProjectHeader>
            <StyledParagraph>
              After successfully rolling out the fast funding pilot nationwide, I took on the 
              role of software lead for a team of four software engineers in building towards a 
              micro frontend target state. We wanted to transform the multi-page flow that existed
              within the Dealer Navigator monolith into a standalone web app with a dedicated
              backend for frontend such that we could release our code changes independent of
              other services.  We also wanted to fully automate all testing during each deployment
              process and to modularize and refactor existing code into Angular 7 docker
              containers, which we would host on Amazon Web Service ECS clusters.  
            </StyledParagraph>
            <StyledParagraph className="collapsible-content collapsed">
              I improved security by replacing all instances of hardcoded access credentials with
              AWS's brand new S3 SDK along with AWS credential provider chains and adding URL guards. 
              In the monolith, we noticed issues where users could manually modify the URL and access
              experiences they shouldn't have been able to. 

              As a community, we decided to build each of our tab's content into its own library to 
              be stored in Artifactory. At build time, the shell application would pull the latest 
              version of each of our artifacts to be lazily rendered.
            </StyledParagraph>
          </Project>
        </StyledProjectsContainer>
      </ScrollableSection>
    );
  }
};
