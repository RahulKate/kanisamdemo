
module.exports = {
    output: {
        filename: "./lifelab-appointment-bundle.js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        { test: /\.(css)$/, use: { loader: 'css-loader' }}
      ]
    }
  };