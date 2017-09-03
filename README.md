# WebpackBlocks-GraphQL-Loader

Simple wrapper around [graphq-tag](https://github.com/apollographql/graphql-tag).  Enables direct `import`ing of `.graphql` and `.gql` files in your JS application.

## Usage

Install via `npm`:

```
npm install --save-dev webpack-blocks-graphql
```

Then include in your `webpack.config.js` file:

```js
var webpack = require("@webpack-blocks/webpack2");
var graphql = require("webpack-blocks-graphql");

module.exports = webpack.config([
  // ...
  graphql(),
  // ...
]);
```

That's it! :clap: