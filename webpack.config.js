const path = require('path');

const packagejson = require('./package.json');
const WebpackDashDynamicImport = require('@plotly/webpack-dash-dynamic-import');
const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = function (env, argv) {
    const mode = (argv && argv.mode) || 'production';
    console.log(mode);
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
        // chunkIds: 'named',
        splitChunks: {
            name: (module, chunks, cacheGroupKey) => {
                const allChunksNames = chunks
                    .map((chunk) => chunk.name)
                    .join('-');
                return `${cacheGroupKey}-${allChunksNames}`; //allChunksNames;
            },
            maxAsyncSize: 500000,
            cacheGroups: {
                async: {
                    name: 'js/[name].[chunkhash].js',
                    chunks: 'async',
                    reuseExistingChunk: true,
                    name: (module, chunks, cacheGroupKey) => {
                        const allChunksNames = chunks
                            .map((chunk) => chunk.name)
                            .join('-');
                        return `${cacheGroupKey}-${allChunksNames}`; //allChunksNames;
                    },
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

    const exp = {
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
    return exp;
};
