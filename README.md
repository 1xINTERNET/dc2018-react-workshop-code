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

This is not needed for the workshop as we will use a hosted backend. If you want to install it locally, follow the steps described in `./backend/README.md`.
