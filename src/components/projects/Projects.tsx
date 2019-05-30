import * as React from 'react';
import Project from './project/Project';
import ScrollableSection from 'react-update-url-on-scroll';
import {
  StyledProjectHeader,
  StyledParagraph
} from './Projects.style';

export default class Projects extends React.Component {
  render() {
    return (
      <ScrollableSection hash={'projects'}>
        <Project>
          <StyledProjectHeader>
            Python Microservice Pipeline
          </StyledProjectHeader>
          <StyledParagraph>
            Every year, Capital One spends billions of dollars paying a third party service to perform
            manual classification and extraction of uploaded dealer documents.  By utilizing 
            Tesseract 4.0 and Inception v3, my team built a python microservice pipeline that 
            classified and extracted individual pages. 
            
            I built the image preprocessing Python microservice. The dockerized image preprocessing 
            tool leveraged opencv to grayscale images, convert the file type, and perform transformations
            to improve the accuracy of our classification and extraction services. We deployed the 
            container on Amazon Web Services' Elastic Container Service. When an upload occurred, 
            our orchestrator placed a message in a Simple Queue Service queue, which my preprocessing 
            service consumed. 

            Upon completion, my service saved the processed image in an S3 bucket and placed
            a message for the next microservice in our pipeline to consume.  In the event of failure,
            we retried up to three times and if the failure still occurred, we placed a message
            in a dead letter queue for later review.

            I also built an Angular 4 re-classification tool to help with the retraining of our 
            classification model.  Users could see uploaded images along with their classification.
            The user could then select the correct classification and these new labels could then 
            contribute directly to our next model retraining to help improve accuracy.
          </StyledParagraph>
          <StyledParagraph>
            Designing an asynchronous service that could handle massive scale while also gracefully
            failing.  I earned my Amazon Web Service certification and leveraged the services I learned
            about to address these concerns.

            Determining the best image transformations that would help to improve classification and
            extraction accuracy while still meeting runtime SLA's.  I ultimately had to experiment and
            go very deep into opencv documentation to avoid costly operations with low impact.
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
          <StyledParagraph>
            Programming business logic into readable and maintainable classes.  Ultimately, I
            leveraged the Builder pattern to produce basic requirements, add on any special
            requirements due to application parameters, and suppress any requirements that
            had exceptions
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
          <StyledParagraph>
            Architecting for active-passive resiliency, particularly with regards to the
            images stored for previewing purposes. I addressed this issue by creating multiple
            Amazon Web Service S3 buckets with data replication turned on. 

            Handling multiple file types given that dealers might provide anything from an image
            file to a PDF. I addressed this by building Amazon Web Service Lambda functions to
            create a PDF copy of every image uploaded to S3. The document previewer could then
            leverage the PDF copy, which provided all of PDFJS's features across all browser types.

            Building responsive pages that could work across all modern browsers. I had to learn
            about break points, polyfills, and the wonders of caniuse.com, but I managed to
            provide a consistent experience from IE11 to edge mobile.  I found that using Sauce
            Labs in conjunction with the Selenium web driver allowed me to quickly test my pages
            across supported browsers very quickly.
          </StyledParagraph>
        </Project>
        <Project>
          <StyledProjectHeader>
            Dealer Navigator - Micro Frontend Target State
          </StyledProjectHeader>
          <StyledParagraph>
            After successfully rolling out the fast funding pilot nationwide, I led as the 
            software lead for a team of four software engineers in building towards a micro
            frontend target state. We wanted to transform the multi-page flow that existed
            within the Dealer Navigator monolith into a standalone web app with a dedicated
            backend for frontend such that we could release our code changes independent of
            other services.  Moreover, to fully automate all testing during each deployment
            process and to modularize and refactor existing code into Angular 7 docker
            containers, which we would host on Amazon Web Service ECS clusters.  
          </StyledParagraph>
          <StyledParagraph>
            Communication with Amazon Web Services. I replaced all instances of hardcoded 
            access credentials with AWS's brand new S3 SDK along with AWS credential provider
            chains.  

            Architecture for a multi-tab page with different pilots for each tab. As a community,
            we decided to build each of our tab's content into its own library to be stored in
            Artifactory. At build time, the shell application would pull the latest version of
            each of our artifacts to be lazily rendered.

            Passing data between the shell app (which handled most shared API calls) and individual
            child components. I learned we could expose artifact interfaces and services through a
            public_api.ts file.
          </StyledParagraph>
        </Project>
      </ScrollableSection>
    );

  }
    
};
