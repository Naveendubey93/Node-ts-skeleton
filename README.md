# [Node-Typescript-Boilerplate]
Skeleton for Node.js applications written in TypeScript


![Introductions](https://i.ibb.co/VHTZKB6/introductions.png)


## Purpose

Our main purpose with this Skeleton is to start server application with node js and typescript.

Try it!! I am happy to hear your feedback or any kind of new features.


## Common Features

## Common Features

- Quick start
    - Simple scaffolding based on Typescript syntax
    - Easy global environment configuration and error handling
    - Flexible for adding new features

- Contiuous Integration
    - Added Github Action Workflow
        - [sonarcloud.io]
        - [snyk.io]
        - [CodeQL]
        - [njsscan] is a static application testing (SAST) tool that can find insecure code patterns in your node.js applications
        - [Codeclimate](https://codeclimate.com/)
          
- Documentation Standards
    - Swagger documentation support and Postman collections
    - Clear instructions in the readme file

- Test Coverage Maintenance
    - Comprehensive test coverage with eslint, prettier, and husky integration

- Production Ready Setup 
    - Followed best practices for security and efficiency
    - Integrated Winston Logger and included only necessary npm modules
  
## Core NPM Module

- [x] `express`, `@types/express`
- [x] `@types/node`
- [x] `typescript`
- [x] `dotenv`
- [x] `cors`
- [x] `helmet`
- [x] `http-status-codes`
- [x] `winston`

# [Start the application]

![Workflow](NODE_ENV=LOCAL|dev|test|production)

## Start The application in Development Mode

- Clone the Application `git clone git clone https://nkdubey12@bitbucket.org/q3info/q3_architecture.git`
- cd NodeJs/BasicArchitecture/Express-Node-Ts-skeleton
- Install the dependencies `npm install`
- Start the application `npm run dev`

## Start The application in Production Mode

- Install the dependencies `npm install`
- Create the build `npm run build`
- Start the application `npm run start`
- Before starting make sure to update your `.env` values for your refrence just check `.env.example`


## Project Structure

| Name                         | Description                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| **wiki/**                    | You can add project documentation and insructions file here |
| **src/**                     | Source files                                                |
| **src/abstractions**         | Abstarct classes and Interfaces                             |
| **src/components**           | REST API Components & Controllers                           |
| **src/lib**                  | Reusable utilises and library source code like a logger     |
| **src/middleware/**          | Express Middlewares like error handler feature              |
| **build/**                   | Compiled source files will be placed here                   |
| **tests/**                   | Test cases will be placed here                              |
| **tests/helpers/**           | Helpers for test cases will be placed here                  |
| **tests/unit-tests/**        | Unit Test cases will be placed here                         |
| **tests/integration-tests/** | API routes (Integration) Test cases will be placed here     |

## Workflow

![Workflow]


## Encryption

Set the `APPLY_ENCRYPTION` environment variable to `true` to enable encryption.

## Swagger API Documentation

The swagger documentation is available at the following url `${host}/docs`:  

[http://localhost:8080/docs](http://localhost:8080/docs)
## Default System Health Status API

- `${host}/api/system/info` - Return the system information in response
- `${host}/system/time` - Return the current time in response
- `${host}/system/usage` - Return the process and system memory usage in response
- `${host}/system/process` -  Return the process details in response
- `${host}/system/error` - Return the error generated object in response

![Swagger API Documentation](https://bitbucket.org/q3info/q3_architecture/src/master/NodeJs/BasicArchitecture/Express-Node-Ts-skeleton/wiki/swagger-api-documentation.jpg)

### [Postman Collections](wiki/postman/node-boilerplate.postman_collection.json)

## Refrences

- [Setup Eslint Prettier and Husky in Node JS Typescript Project](https://gist.github.com/santoshshinde2012/e1433327e5f7a58f98fe3e6651c4d5de)

## Notes

### 1. Why is my git pre-commit hook not executable by default?

- Because files are not executable by default; they must be set to be executable.

```
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

### 2. [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html)

- Don’t use deprecated or vulnerable versions of Express
- Use TLS
- Use Helmet
- Use cookies securely
- Prevent brute-force attacks against authorization
- Ensure your dependencies are secure
- Avoid other known vulnerabilities
- Additional considerations

