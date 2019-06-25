# Lunar

## Lunar is online school register project we currently working on.
## Lunar is a MEAN stack app (Mysql, Express.js, Angular6, Node.js).
## It's structure is split into backend and frontend section.

## In order to setup project on your local machine you need to:

#### Clone repo from https://github.com/LoudSilencex666/lunar.git

#### Install your own mysql server or use https://remotemysql.com/ for faster development

#### Create new database and import test database from lunar/test_db/test db.sql
    It has whole structure and dummy data to mess around with.

#### Go to Lunar directory and rename .env-example to .env than change its example data with your mysql server data for correct database connection.

#### Go to lunar/backend/config and rename index-example.js to index.js than change its:
#### `cookieSessionId` to whatever you want, its required to json-web-token and
#### `process.env.SECRET` also to whatever you want

#### Next step go to lunar/app/environments rename environment.example.ts to enviroment.ts and change its
#### `cookieSession` to the same as `cookieSessionId` from lunar/backend/config/index.js
#### You can also change your `api_url` from default: 'http://localhost:3000' but we highly recommended to leave it as is.
#### if you chose to change it then open lunar/server.js to change backend port from `3000` to new,
#### than open lunar/backend/app.js and update `allowedOrigins` with your new `api_url`  

#### Next run npm install in lunar directory

#### Run `start:server` and `start:client`

#### In order to see server logs open new command line and Run `logs:server`

## That's it!

