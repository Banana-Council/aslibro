# Inception

This workspace serves as template for creating software proyects.

## Structure

- **./**: Contains common configuration such as linting rules, husky and docker.

- **./packages/api**: DDD, CQRS, and Event Sourcing-driven application with NestJS. It's connected to two databases: one for events (EventStore) and another one for views (MongoDB).

- **./packages/web**: React application with Vite. It has styled-components, i18next for translations and react router configured.

- **./packages/shared**: Storybook configured to create components and use them in the frontend applications of the workspace. It should also include common utilities used accros the workspace.

## Usage

1. Run `npm i` in the root folder to install all the workspace dependencies.

2. Run `docker-compose up` to create the containers that will host the workspace infrastructure (MongoDB, Mongo Express and EventStore).

3. Run `npm start` to start both the **api** and the **web** applications.
