# DrupalCon Europe 2018: React workshop code

This repository contains the complete code for the workshop _"Using React with Drupal. The Basics."_ (Working title)

The subject of the workshop is how to implement a simple decoupled Drupal content viewing app. As such the workshop itself will mainly deal with the frontend aspects (within the `./frontend` directory). For those interested the backend used is also included in the `./backend` directory. (See `./backend/README.md` for more information)

# Requirements

## For app/frontend development

1. _nodejs_ of at least version 8
2. _yarn_ package manager (if it is missing: `npm i yarn -g`)

## For backend development

1. _docker_
2. _docker-composer_ on Linux machines

# Getting started (with app development)

(For instructions for the backend, look into `./backend/README.md`)

1. Go into the `./frontend` directory:
   ```bash
   $ cd frontend
   ```
2. Install dependencies:
   ```bash
   $ yarn
   ```
3. Start development server:
   ```bash
   $ yarn start
   ```
4. In your browser open: `http://localhost:3000`
