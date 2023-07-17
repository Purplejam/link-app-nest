# Fullstack Application (Nest, React) - Link Management

This is a fullstack application built with Nest.js for the backend and React for the frontend. It allows users to handle links by performing operations such as adding new links, retrieving a list of all links, updating information about a link, and deleting a link. The links are stored in a MySQL database.

## Backend

The backend is built with Nest.js. It provides the following functionality:

- Addition, retrieval, updating, deletion of a link
- Retrieval of a list of all links
– Validation input data and handle possible errors with custom validation

To ensure data integrity, the backend utilizes custom validators from the `class-validator` library. These validators are used to check if the link name is unique and if the URL is properly formatted (including the `www`, `http`, or `https` prefix).

For error handling, the backend utilizes an HTTP exception filter, which provides consistent and structured error responses to the clients.

## Frontend

The frontend is built with React and TypeScript. It uses Redux and Redux Thunk for state management, Material-UI for UI components, and Axios for making HTTP requests to the backend.

The source code of the React application can be found in the `dist/client/` directory. You can also find the build folder in the same location.

## Deployment

The application is deployed on Render. You can access the deployed application using the following link: [Link Management App](https://link-crud.onrender.com/)

---
