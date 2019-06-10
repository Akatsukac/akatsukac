# akatsukac
Personal website powered by React built with the Gatbsy framework.

## Architecture
* Gatsby Static Site Generator (React, GraphQL)
* Leveraging plugins to enable:
  * TypeScript
  * `styled-components`
* Created fork of react-update-url-on-scroll with bug fixes and ie-11 compatibility: 
https://github.com/Akatsukac/react-update-url-on-scroll
* Leveraged material-ui for components such as app bar and buttons
* Deployed on Netlify

## Commands

Use graphql-code-generator to generate TypeScript types for GraphQL queries:

`yarn gql-gen --schema ./schema.json --template graphql-codegen-typescript-template ``--out ./src/typings/graphql.d.ts "./src/**/*.ts*"`

## Notes
* Supports major browsers (e.g. Chrome, Edge)
* Partial support on IE-11, Safari
* Tablet and mobile ready
