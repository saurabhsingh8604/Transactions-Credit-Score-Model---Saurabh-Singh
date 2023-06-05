const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "source-map",

    devServer :{
        port: 3002,
        watchContentBase: true

    },

    module: {
        strictExportPresence: true,
        rules: [
          // Disable require.ensure as it's not a standard language feature.
          { parser: { requireEnsure: false } },
    
          // First, run the linter.
          // It's important to do this before Babel processes the JS.
          {
            test: /\.(js|mjs|jsx)$/,
            enforce: 'pre',
            use: [
              {
                options: {
                  formatter: require.resolve('react-dev-utils/eslintFormatter'),
                  eslintPath: require.resolve('eslint'),
                  
                },
                loader: require.resolve('eslint-loader'),
              },
            ],
            include: paths.appSrc,
          },
          {
            // "oneOf" will traverse all following loaders until one will
            // match the requirements. When no loader matches it will fall
            // back to the "file" loader at the end of the loader list.
            oneOf: [
              // "url" loader works like "file" loader except that it embeds assets
              // smaller than specified limit in bytes as data URLs to avoid requests.
              // A missing `test` is equivalent to a match.
              {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
              // Process application JS with Babel.
              // The preset includes JSX, Flow, and some ESnext features.
              {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: paths.appSrc,
                loader: require.resolve('babel-loader'),
                options: {
                  customize: require.resolve(
                    'babel-preset-react-app/webpack-overrides'
                  ),
                  
                  plugins: [
                    [
                      require.resolve('babel-plugin-named-asset-import'),
                      {
                        loaderMap: {
                          svg: {
                            ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                          },
                        },
                      },
                    ],
                  ],
                  // This is a feature of `babel-loader` for webpack (not Babel itself).
                  // It enables caching results in ./node_modules/.cache/babel-loader/
                  // directory for faster rebuilds.
                  cacheDirectory: true,
                  // Don't waste time on Gzipping the cache
                  cacheCompression: false,
                },
              },
              // Process any JS outside of the app with Babel.
              // Unlike the application JS, we only compile the standard ES features.
              {
                test: /\.(js|mjs)$/,
                exclude: /@babel(?:\/|\\{1,2})runtime/,
                loader: require.resolve('babel-loader'),
                options: {
                  babelrc: false,
                  configFile: false,
                  compact: false,
                  presets: [
                    [
                      require.resolve('babel-preset-react-app/dependencies'),
                      { helpers: true },
                    ],
                  ],
                  cacheDirectory: true,
                  // Don't waste time on Gzipping the cache
                  cacheCompression: false,
                  
                  // If an error happens in a package, it's possible to be
                  // because it was compiled. Thus, we don't want the browser
                  // debugger to show the original code. Instead, the code
                  // being evaluated would be much more helpful.
                  sourceMaps: false,
                },
              },
              // "postcss" loader applies autoprefixer to our CSS.
              // "css" loader resolves paths in CSS and adds assets as dependencies.
              // "style" loader turns CSS into JS modules that inject <style> tags.
              // In production, we use a plugin to extract that CSS to a file, but
              // in development "style" loader enables hot editing of CSS.
              // By default we support CSS Modules with the extension .module.css
              {
                test: cssRegex,
                exclude: cssModuleRegex,
                use: getStyleLoaders({
                  importLoaders: 1,
                }),
              },
              // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
              // using the extension .module.css
              {
                test: cssModuleRegex,
                use: getStyleLoaders({
                  importLoaders: 1,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent,
                }),
              },
              // Opt-in support for SASS (using .scss or .sass extensions).
              // Chains the sass-loader with the css-loader and the style-loader
              // to immediately apply all styles to the DOM.
              // By default we support SASS Modules with the
              // extensions .module.scss or .module.sass
              {
                test: sassRegex,
                exclude: sassModuleRegex,
                use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
              },
              // Adds support for CSS Modules, but using SASS
              // using the extension .module.scss or .module.sass
              {
                test: sassModuleRegex,
                use: getStyleLoaders(
                  {
                    importLoaders: 2,
                    modules: true,
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                  'sass-loader'
                ),
              },
              // "file" loader makes sure those assets get served by WebpackDevServer.
              // When you `import` an asset, you get its (virtual) filename.
              // In production, they would get copied to the `build` folder.
              // This loader doesn't use a "test" so it will catch all modules
              // that fall through the other loaders.
              {
                // Exclude `js` files to keep "css" loader working as it injects
                // its runtime that would otherwise be processed through "file" loader.
                // Also exclude `html` and `json` extensions so they get processed
                // by webpacks internal loaders.
                exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                loader: require.resolve('file-loader'),
                options: {
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
            ],
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
}