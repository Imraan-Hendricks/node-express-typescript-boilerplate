# node-express-typescript-boilerplate

This project serves as a starting point for node js applications that use express and typescript.

The project includes all necessary configurations for development and production and can further be customized to suit the specific needs of any application.

### Features include:

- client controller
- dev and production npm scripts
- dotenv and env variable management
- gitignore
- serve static files (client and public)
- routes (api and back office)
- shutdown on interrupt and terminate

### Requirements:

- node js v12 (current version: 12.18.0)

### Usage:

- clone repository or download source code
- create .env file in config dir and add environment variables (see: /src/config/.env.example)
- open project directory in terminal
- run npm install
- run npm run dev

### Production usage:

Run the build command 'npm run build' and use 'npm run start' to start the application in production mode. Note that the environment variables are setup for the development environment and will not be available in production mode. In production, environment variables should be configured on the host server.

### Available scripts:

In the project directory, you can run:

### `npm run start`

Starts the server in production mode

### `npm run dev`

Starts the server in development mode

### `npm run build`

Builds the app for production to the build folder

### `npm run tsConfig`

Initializes typescript project by creating a tsconfig.json file
