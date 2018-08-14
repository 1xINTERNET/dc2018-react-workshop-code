# Step 2

We will look at all the things `create-react-app` generated for us (For the full CRA documentation, take a look at the `README.md` file)

1. App code is in `./src`

   1. `./src/index.js` is the entry point. Here we mount the root React component `<App>`
   2. `./src/App.js` is where the root component is defined.
   3. Ignore: `./src/registerServiceWorker.js`

2. Other meta information and templates for the app are in `./public`

   1. `./public/favicon.ico` The app icon
   2. `./public/index.html` The template for the generated app HTML entry file
   3. `./public/manifest.json` Meta information for browsers to recognise this as an app.

3. `./package.json` This contains the meta information for our app project. More importantly CRA has added some scripts which we can use:

   1. `yarn start` – Start the development server and open a browser at `localhost:3000`
   2. `yarn build` – Build the whole app as an optimised bundle which can be used in production

4. `./build` This is only visible once we run `yarn build` – It is the optimised and production ready App.
