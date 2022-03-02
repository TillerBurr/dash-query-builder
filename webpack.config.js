const path = require('path');
const packagejson = require('./package.json');
const dashLibraryName = packagejson.name.replace(/-/g, '_');
const WebpackDashDynamicImport = require('@plotly/webpack-dash-dynamic-import');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    let mode;

    const overrides = module.exports || {};

    // if user specified mode flag take that value
    if (argv && argv.mode) {
        mode = argv.mode;
    }

    // else if configuration object is already set (module.exports) use that value
    else if (overrides.mode) {
        mode = overrides.mode;
    }

    // else take webpack default (production)
    else {
        mode = 'production';
    }

    let filename = (overrides.output || {}).filename;
    let chunkFilename = '[name].js';
    if (!filename) {
        const modeSuffix = mode === 'development' ? 'dev' : 'min';
        filename = `${dashLibraryName}.${modeSuffix}.js`;
        chunkFilename = `[name].${modeSuffix}.js`;
    }

    const entry = overrides.entry || { main: './src/lib/index.js' };

    const devtool = overrides.devtool || 'source-map';

    const externals =
        'externals' in overrides
            ? overrides.externals
            : {
                react: 'React',
                'react-dom': 'ReactDOM',
                'plotly.js': 'Plotly',
                'prop-types': 'PropTypes',
                // 'react-awesome-query-builder': 'Utils',
            };

    return {
        mode,
        entry,
        output: {
            path: path.resolve(__dirname, dashLibraryName),
            chunkFilename: chunkFilename,
            filename,
            library: dashLibraryName,
            libraryTarget: 'window',
            globalObject: 'window'
        },
        devtool,
        externals,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader",
                            options: {
                                insert: function insertAtTop(element) {
                                    var parent = document.querySelector("head");
                                    // eslint-disable-next-line no-underscore-dangle
                                    var lastInsertedElement =
                                        window._lastElementInsertedByStyleLoader;

                                    if (!lastInsertedElement) {
                                        parent.insertBefore(element, parent.firstChild);
                                    } else if (lastInsertedElement.nextSibling) {
                                        parent.insertBefore(element, lastInsertedElement.nextSibling);
                                    } else {
                                        parent.appendChild(element);
                                    }

                                    // eslint-disable-next-line no-underscore-dangle
                                    window._lastElementInsertedByStyleLoader = element;
                                },
                            },
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
            ],
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        warnings: false,
                        ie8: false
                    }
                })
            ],
            splitChunks: {
                name: "[name].js",
                cacheGroups: {
                    async: {
                        chunks: 'async',
                        minSize: 0,
                        name(module, chunks, cacheGroupKey) {
                            return `${cacheGroupKey}-${chunks[0].name}`;
                        }
                    },
                    shared: {
                        chunks: 'all',
                        minSize: 0,
                        minChunks: 2,
                        name: 'dash_query_builder.shared'
                    }
                }
            }
        },
        plugins: [
            new WebpackDashDynamicImport(),
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map',
                exclude: ['async-plotlyjs']
            })
        ]
    }
};
