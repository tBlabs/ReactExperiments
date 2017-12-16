const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
    {
        entry:
        {
            src: './src/index.tsx',
            //   lib: [ 'react', 'react-dom', 'mobx', 'mobx-react', 'inversify', 'axios' ]
        },

        output:
        {
            filename: '[name].bundle.js',
            path: __dirname + '/dist'
        },

        module:
        {
            rules:
            [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },

                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                    ]
                }

            ]
        },

        resolve:
        {
            extensions: [ ".tsx", ".ts", ".js" ],
            modules: [
                '**/*',
                __dirname + '/node_modules',
                __dirname + '/src'
            ]
        },

        plugins:
        [
            new HtmlWebpackPlugin(
                {
                    title: "App",
                    template: "./src/index.template.ejs"
                })
        ]

    };