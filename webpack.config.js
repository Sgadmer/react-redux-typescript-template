//Constants
const path = require('path')
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

//Plugins
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')

//Functions
const getPath = (pathToGet) => path.resolve(__dirname, pathToGet)
const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    }

    if (isProd) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ]
    }

    return config
}
const plugins = (extra) => {
    const plugins = [
        new HTMLWebpackPlugin({
            template: getPath('src/assets/index.html'),
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: getPath('static'),
                    to: getPath('build'),
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
    ]

    if (extra) {
        plugins.push(extra)
    }

    return plugins
}

const styleLoaders = (extra) => {
    loaders = [{
        loader: MiniCssExtractPlugin.loader,
    },
    {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev
                    ? '[local]__[hash:base64:5]'
                    : '[hash:base64:5]',
                auto: true,
            },
        },
    },
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = (preset) => {
    const opts = {
        presets: [
            '@babel/preset-env',
            '@babel/preset-typescript'
        ],
        plugins: ["react-hot-loader/babel"]
    }
    if (preset) {
        opts.presets.push(preset)
    }
    return opts
}

module.exports = {
    context: getPath('src'),
    entry: {
        main: ['react-hot-loader/patch', '@babel/polyfill', './index.tsx']
    },
    output: {
        filename: filename('js'),
        path: getPath('build'),
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss', '.sass'],
        alias: {
            '@': getPath('src'),
            '@static': getPath('static'),
            '@app': getPath('src/app'),
            '@components': getPath('src/app/components'),
            '@constants': getPath('src/app/constants'),
            '@contexts': getPath('src/app/contexts'),
            '@hocs': getPath('src/app/hocs'),
            '@hooks': getPath('src/app/hooks'),
            '@layouts': getPath('src/app/layouts'),
            '@models': getPath('src/app/models'),
            '@pages': getPath('src/app/pages'),
            '@services': getPath('src/app/services'),
            '@styles': getPath('src/app/styles'),
            '@utils': getPath('src/app/utils'),
            'react-dom': '@hot-loader/react-dom',
        }
    },
    optimization: optimization(),
    devServer: {
        contentBase: getPath('src'),
        hot: true,
        inline: true,
        open: true,
        historyApiFallback: true,
        stats: 'minimal',
        clientLogLevel: 'warning',
        port: 3001,
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            },
            {
                test: /\.css$/,
                use: styleLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: styleLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    },
    devtool: isProd ? 'hidden-source-map' : 'source-map',
}