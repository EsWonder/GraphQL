# GraphQL Hello World

This project implements a basic GraphQL server using Node.js and Express. It features a simple "Hello World" query that returns a greeting message, making it an excellent starting point for learning GraphQL fundamentals. The project also includes Docker support for easy deployment and containerization.

## Technologies Used

- **Node.js**: v18.x or higher  
- **GraphQL**: v16.9.0  
- **Express**: v4.18.0  
- **Express-GraphQL**: v0.12.0  
- **Docker**: Latest version  

## Requirements

To run this project, ensure you have the following installed:  

- Node.js and npm ([Download Node.js](https://nodejs.org))  
- Docker ([Download Docker](https://www.docker.com))  
- Git ([Download Git](https://git-scm.com))  

## Steps to Clone the Project

Run the following command to clone the repository:  

```bash
git clone <repository-url>
cd graphql-hello-world
```
#Install and Run Locally
##Install dependencies:

```bash
npm install
```
##Start the GraphQL server:

```bash
node src/server.js
```
#Access the GraphQL Playground by visiting:

```bash
http://localhost:4000/graphql
```
###Run the Project with Docker
```Build the Docker image:
```
```bash
docker build -t graphql-hello-world .
```
Run the container:

```bash
docker run -p 4000:4000 graphql-hello-world
Access the GraphQL Playground at:
```
bash
```
http://localhost:4000/graphql|
```
