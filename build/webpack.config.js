const path = require('path')
const glob = require('glob'); // https://www.npmjs.com/package/glob
const HTMLWebpackPlugin = require('html-webpack-plugin'); // https://github.com/jantimon/html-webpack-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // https://webpack.js.org/plugins/mini-css-extract-plugin/

function getTemplates() {
  return new Promise(function(resolve, reject) {
    glob('**/!(_*).njk', {cwd: '../templates/'}, function(error, files) {
      if (error) {
        return reject(error);
      }

      resolve(files);
    });
  });
}

function toPlugin(fileName) {
  return new HTMLWebpackPlugin({
    template: '../templates/'+fileName,
    filename: '../public/'+fileName.replace(/\.njk$/, '.html')
  });
}

module.exports = function() {
    
    const templates = getTemplates().then((files) => files.map(toPlugin));

    return templates.then(function(templates) {
        
        return {
            // ... all other config with loaders and etc
            mode: "development",

            entry: "../js/index.js",

            output: {
              path: path.resolve(__dirname, '../public/'),
              // publicPath: path.resolve(__dirname, '../public/'),
            },

            devtool: 'source-map',

            module: {
                rules: [
                    {
                        test: /\.njk$/,
                        use: [
                            {
                                loader: 'simple-nunjucks-loader', // https://ogonkov.github.io/nunjucks-loader/examples/html-webpack-plugin/
                                options: {
                                    searchPaths: [
                                        '../templates/'
                                    ]
                                }
                            }
                        ]
                    },
                    {
                      test: /\.s[ac]ss$/i,
                      use: [
                        MiniCssExtractPlugin.loader,
                        // Creates `style` nodes from JS strings
                        // "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                      ],
                    }
                      
                ]
            },

            plugins: [
                // new HTMLWebpackPlugin()
                ...templates,
                new MiniCssExtractPlugin ({
                  filename: 'style.css'
                }),
            ]
        }
    });
};
