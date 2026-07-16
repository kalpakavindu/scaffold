# Project Lorem (API)

The API for Project Lorem.

## Tech Stack

- **JavaScript:** Programming language
- **Express:** API framework
- **Node:** Runtime engine
- **Docker:** Container

## Project Structure

```txt
workspace
├── database
│   ├── 01_init.js
│   ├── 02_collections.js
│   └── 03_seed.js
├── enums
│   ├── user.enum.js
│   └── index.js
├── middlewares
│   ├── error.middleware.js
│   └── index.js
├── models
│   ├── user.model.js
│   └── index.js
├── controllers
│   ├── user.controller.js
│   └── index.js
├── routes
│   ├── auth.route.js
│   └── index.js
├── utils
│   ├── db.util.js
│   └── index.js
├── validators
│   └── index.js
├── .env
├── .dockerignore
├── docker-compose.yml
├── DockerFile
├── server.js
├── package.json
└── README.md
```

## Development Setup

After scaffold script, create `.env` file and include following.

```env
NODE_ENV= // "development" or "production"

SERVER_PORT= // Port for server to listen
SERVER_HOST= // Host of the server

CLIENT_URL= // URL of the client webapp

MAIL_HOST= // Email server host
MAIL_PORT= // Email server port
MAIL_USER= // Email server username
MAIL_PASS= // Email server password

DB_ROOT= // MongoDB root password
DB_HOST= // MongoDB host (set this to the database container name if you are running in docker)
DB_USER= // MongoDB username (don't use 'admin' or admin account name here)
DB_PASS= // MongoDB password
DB_NAME= // MongoDB database name
```

### Running in Your Local Machine

Install dependencies.

```bash
npm i # or
pnpm i # or
yarn i
```

Then Start the development server.

```bash
npm dev # If you ran `npm i`
npm dev # If you ran `npm i`
yarn dev # If you ran `yarn i`
```

### Running in Docker

Start Docker and run the following command.

```bash
docker compose up -d --build
```

You can use `mongodb://<DB_USER>:<DB_PASS>@localhost:27017/<DB_NAME>` connection string replacing your credentials specified in `.env` to connect with external tools like `DataGrip` or `MongoDB Compass`.