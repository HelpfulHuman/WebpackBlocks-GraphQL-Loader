/**
 * Configures graphql-tag/loader for use with webpack blocks.
 *
 * @return {Function}
 */
function graphql () {
  return (ctx) => ({
    module: {
      loaders: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader",
        },
      ],
    },
  });
}

module.exports = graphql;