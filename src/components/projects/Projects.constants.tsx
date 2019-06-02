export const projectContent =  [
  {
    'title': 'Breaking Up The Monolith',
    'summary': 
      `As software lead, I worked with four software engineers to build towards a
      micro frontend target state that reduced deployment times from six hours to 
      20 minutes.`,
    'paragraphs': [
      `At Capital One, we have a web application called "Dealer Navigator" that 
      allows auto dealers to finance their customers' auto loans. The document 
      upload section, one of the core services offered, receives hundreds of 
      thousands of visitors per day and generates over a billion dollars in revenue
      every year. Unfortunately, the application became a monolith over the years
      and desperately needed a rework.`,
      `I led the effort in building an Angular micro frontend with a dedicated 
      backend for frontend for the document upload section. In addition to a normal
      developer workload, I reviewed pull requests, guided architecture discussions,
      and provided one-on-one mentorship sessions. By the end of the project, we 
      achieved our goal of having a modular and refactored codebase for our frontend
      and backend.`,
      `Beyond dockerization and migrating code out of the monolith, I made many 
      technical improvements. I hosted the dockerized containers on an Amazon Web 
      Services ECS cluster, automated the run of perf and functional tests before
      each release, and added route guards to prevent URL tampering. I also moved
      all application logic to the BFF layer, updated deprecated dependencies, and
      improved test coverage to surpass company standards.`
    ]
  },
  {
    'title': 'Reimagining The Customer Experience',
    'summary': 
      `I rebuilt a business-critical Angular web app with loan funding requirements,
      document classification, and a PDFJS document previewer, resulting in a 15%
      increase in dealerships leveraging the web app over mail and fax.`,
    'paragraphs': [
      `I integrated NGRX for maintaining component state across different pages, 
      built collapsible banners for previewing uploaded documents, and tables to
      clearly communicate dealer funding requirements. In order to fully leverage
      all of PDFJS's features, I also built a Lambda function on Amazon Web Services
      that created a PDF copy of every image uploaded to S3.`,
      `Through this project, I learned how to build responsive pages that could work
      across all modern browsers. I had to learn about breakpoints, polyfills, and
      the wonders of caniuse.com.`
    ]
  },
  {
    'title': 'Clearing Up The Confusion',
    'summary': 
    `I architected and developed a Java Spring Boot REST API that provides application
    specific funding requirements, reducing the number of applications with missing
    documents by 55%.`,
    'paragraphs': [
      `I leveraged the Builder design pattern to program business logic into readable
      and maintainable classes. This allowed me to modularize the logic for including
      universal requirements, special requirements due to application parameters, and
      custom requirements from funders.`,
      `Dealers responded to these changes with overwhelmingly positive feedback and
      the number of "clean deals" (deals that provided all required documentation on
      the first try) increased drastically.`
    ]
  },
  {
    'title': 'Building A Document Classification/Extraction Pipeline',
    'summary':
    `I replaced a manual document classification process with an event-driven Python
    microservice pipeline on Amazon Web Services that classifies 1 million documents
    per day in less than 10 seconds per page, saving $6 million annually.`,
    'paragraphs': [
      `For the pipeline, I built an image preprocessing Python microservice. The
      dockerized image preprocessing tool leveraged OpenCV to grayscale images, 
      convert files to jpeg, and perform content isolation transformations to
      increase accuracy. I deployed the container on an Amazon Web Services ECS cluster.`,
      `When an upload occurs, the orchestrator places a message in an SQS queue, which
      my preprocessing service consumes. Upon completion, my service saves the 
      processed image in an S3 bucket and places a message for the next microservice 
      in the pipeline to consume.  In the event of failure, the service retries up to
      three times before placing a message in a dead letter queue for manual review.`,
      ` I also built an Angular 4 GUI to help with the retraining of the classification
      model. The GUI allows users to view uploaded images next to their classification.
      If the user identifies a misclassification, he or she can select the correct label
      from a dropdown. Reclassification data feeds directly into retraining data sets,
      which help to improve classification accuracy.`
    ]
  }
]