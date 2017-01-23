# PulseLive Test: Player Card Component

Example of a data driven re-usable player stats card component.

## Install dependencies
`npm install`

## Run development server
`npm run start-dev`

## Production build
`npm run build`

## Run production server
`npm start`

---

## The process...

The 'card' itself is contained within a fixed width/height div centered, and a slight box shadow applied for 'material' effect.

Data fetched from provided .json file with AJAX call (axios library). Response payload used to update React state, from which all relevant values have been filtered and calculated and used to populate their respective fields.

React's component architecture used to create well-organised modular code, and semantic tags for ease of identification.

All .png files optimised with https://tinypng.com. Sprite sheet reduced to 70% of original size to fit within ellipse dimension (as indicated in guide .psd file). CSS `background-position` value shifted in 70px increments to switch between club badges. White background removed from original spritesheet to make it transparent, as the div containing the image had to remain square to contain all badge sprites (when not transparent, white corners of the image spilled outside of the ellipse).

If application were larger, most likely would have implemented Redux to manage global store state, but since it is a relatively simple component, this seemed unnecessarily verbose under the circumstances and I opted for react's native state object instead.

---

## About

App makes use of:

* [React](https://github.com/facebook/react)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6/ES7 and JSX transpiling
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)

See package.json for complete list of dependencies.
