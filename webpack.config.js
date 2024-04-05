const path = require('path');

const packagejson = require('./package.json');
const WebpackDashDynamicImport = require('@plotly/webpack-dash-dynamic-import');
const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = function (env, argv) {
    const mode = (argv && argv.mode) || 'production';
    const entry = [path.join(__dirname, 'src/ts/index.ts')];
    const output = {
        path: path.join(__dirname, dashLibraryName),
        filename: `${dashLibraryName}.js`,
        chunkFilename: 'js/[name].js',
        library: dashLibraryName,
        libraryTarget: 'umd',
    };
    let plugins = [
        new WebpackDashDynamicImport(),
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[file].map',
        //     exclude: ['async-plotlyjs'],
        // }),
    ];
    const optimization = {
        splitChunks: {
            name: 'js/[name].js',
            maxSize: 500000,
            cacheGroups: {
                async: {
                    chunks: 'async',
                    // minSize: 0,
                    name(module, chunks, cacheGroupKey) {
                        return `${cacheGroupKey}-${chunks[0].name}`;
                    },
                },
                shared: {
                    chunks: 'all',
                    // minSize: 0,
                    minChunks: 2,
                    name(module, chunks, cacheGroupKey) {
                        return `${cacheGroupKey}-${chunks[0].name}`;
                    },
                },
                reactVendor: {
                    test: /[\\/]node_modules[\\/](@react-awesome-query-builder\/antd)[\\/]/,
                    name: 'vendor-antd',
                    chunks: 'all',
                },
            },
        },
    };

    const externals = {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            umd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
            root: 'ReactDOM',
        },
    };

    return {
        output,
        mode,
        entry,
        plugins,
        optimization,
        target: 'web',
        externals,
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                insert: function insertAtTop(element) {
                                    var parent = document.querySelector('head');
                                    var lastInsertedElement =
                                        window._lastElementInsertedByStyleLoader;

                                    if (!lastInsertedElement) {
                                        parent.insertBefore(
                                            element,
                                            parent.firstChild
                                        );
                                    } else if (
                                        lastInsertedElement.nextSibling
                                    ) {
                                        parent.insertBefore(
                                            element,
                                            lastInsertedElement.nextSibling
                                        );
                                    } else {
                                        parent.appendChild(element);
                                    }

                                    window._lastElementInsertedByStyleLoader =
                                        element;
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
    };
};
