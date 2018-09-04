# Drupal Europe 2018: React workshop code

This repository contains the complete code for the workshop _"Using React with Drupal. The Basics."_ (Working title)

The subject of the workshop is how to implement a simple decoupled Drupal content viewing app. As such the workshop itself will mainly deal with the frontend aspects (within the `./frontend` directory). For those interested the backend used is also included in the `./backend` directory. (See `./backend/README.md` for more information)

# App development

The frontend is built using `create-react-app` for scaffolding. You can read the comprehensive documentation at `./frontend/README.md`.

To work on the app code you need to have the following dependencies installed:

- `git`
- `nodejs` of at least version 8
- `yarn` package manager (if it is missing: `npm i yarn -g`)

## Getting started

1. Go into the `./frontend` directory:
   ```bash
   $ cd frontend
   ```
2. Install dependencies:
   ```bash
   $ yarn
   ```
3. Customise the API base URL (`config.apiBase`) in `./frontend/package.json`. By default it points to the locally hosted backend. (See below how to get that working)
4. Start development server:
   ```bash
   $ yarn start
   ```
5. You can access the served app code by pointing your browser to [http://localhost:3000](http://localhost:3000)

# Backend development/Hosting the backend locally

> **Important! Please read!**
>
> The repository contains the `settings.php` file with the database credentials. This should NEVER be done with real-life projects.
>
> (Also the `sites/default/files` directory is under version control. This is probably also not a good idea in non-demo projects)

The backend is built using `docker4drupal` ([Visit project documentation](https://docs.wodby.com/stacks/drupal/local/))

You need to have the following dependencies installed:

- `docker`
- `composer`
- `docker-compose` on Linux

## Getting started

1. Go into the `./backend` directory:
   ```bash
   $ cd backend
   ```
2. Install backend dependencies:
   ```bash
   $ cd htdocs && composer install && cd ..
   ```
3. Start local development server (You will probably have to wait a minute, because importing the database can take a while. Before this is complete you will see an `The website encountered an unexpected error. Please try again later.` error.):
   ```bash
   $ docker-compose up -d
   ```
4. Clean the cache
   ```bash
   $ docker-compose exec php drush cr -r /var/www/html/htdocs/web
   ```
5. You can access the backend by pointing your browser to [http://dc2018-react-backend.docker.localhost/](http://dc2018-react-backend.docker.localhost/)

## Persisting database changes

Persist database changes (will be imported on next `docker-compose up -d`:

```bash
# In ./backend/
$ ./persist-db.sh
```

## Stopping local development server

```bash
$ docker-compose down
```
