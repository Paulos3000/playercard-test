# Player Card Component

Example of a data driven re-usable player stats card component.

---

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

- Webpack bundles all JSX/ES6 code into standard ES5 in single `bundle.js` file which is readable by all modern browsers, also in production it bundles CSS styles into a static stylesheet which allows browser to load CSS at the same time as JS, avoiding the any flashes of unstyled content.

- React's component architecture is used to create well-organised modular code, and semantic tags for ease of identification.

- The 'card' itself is contained within a fixed width/height div centered, and a slight box shadow applied for 'material' effect.

- Data fetched from provided .json file with AJAX call ('axios' library). Response payload is then used to update `this.state`, from which all relevant values have been filtered and calculated and used to populate their respective fields.

- Regarding state: if the application were larger, most likely I would have implemented Redux to manage global state, but being a relatively simple component, this seemed unnecessarily verbose under the circumstances and I opted for react's native `this.state` object instead.

- The dropdown menu makes use of the 'ReactCSSTransitionGroup' library, which dynamically applies a specific class to the component when mounted or unmounted, and allows a specified time period in which the animation is allowed to occur in the case of unmounting. The rest is taken care of by CSS3 Transitions as declared in the stylesheet. In this case I wrapped the menu in a div with the `overflow: hidden` style so that an adjustment to it's relative positioning rendered it hidden from view.

- All .png files are optimised with https://tinypng.com. Sprite sheet is reduced to 70% of original size to fit within ellipse dimension (as indicated in guide .psd file). CSS `background-position` values are shifted in 70px increments to switch between club badges. The white background has been removed from original spritesheet to make it transparent, as the div containing the image had to remain square to contain the badge images (when background was opaque, white corners of the image spilled outside of the ellipse).



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
