const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');
// DONT USE BABEL-LOADER 8, ONLY 7 || npm install -D babel-loader@7 babel-core babel-preset-env webpack

module.exports = env => {


  return {

    mode: 'none',
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      path: DIST_DIR,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                {
                  plugins: [
                  [
                    "@babel/plugin-proposal-class-properties"
                  ]
              ],
            }
              ],
            },

          }
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(gif|png)$/,
          use: ['file-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    }
  }
}

