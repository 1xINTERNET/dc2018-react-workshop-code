# Step 2

We will look at all the things `create-react-app` generated for us (For the full CRA documentation, take a look at the `README.md` file)

## ./src

Your actual App source code.

   1. `./src/index.js` is the entry point. Here we mount the root React component `App`
   2. `./src/App.js` is where the root component is defined.

## ./public

Templates and assets.

   1. `./public/favicon.ico` The app icon
   2. `./public/index.html` The template for the generated app HTML entry file
   3. `./public/manifest.json` Meta information for browsers to recognise this as an app.

## ./package.json

Meta information for our app project.

We added the `apiBase` config property which represents the base URL of the API we want to talk with. This is used in later steps.

CRA has added some scripts which we can use:

   1. `yarn start` – Start the development server and open a browser at `localhost:3000`
   2. `yarn build` – Build the whole app (into `./build` as an optimised bundle which can be used in production
