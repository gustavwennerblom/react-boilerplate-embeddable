# react-boilerplate-embeddable

A boilerplate setup for a React application which can be embedded on another web page

Includes:
* ESLint, with plugins for Babel and React, and some sensible presets
* Configured Webpack
* Configured Jest and Enzyme for unit testing
* Configured Babel with default plugins
* Preferred VSCode settings

To use:
* Clone the repo
* `npm install`
* Test that everything is working with `npm run start`
* Run tests using `npm run test`
* When you're ready to deploy, run `npm run build` and find your webpacked output in a new `dist/` folder

Don't forget to configure:
* Repo naming and other app-specific data in `package.json`
* Output file naming in `webpack.config.js`
