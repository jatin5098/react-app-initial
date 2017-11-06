var config = {
    context: __dirname + '/src',
    entry: './app/app.js',     
    output: {
       path: __dirname,
       filename: 'app.bundle.js',
    },
     
    devServer: {
       inline: true,
       port: 5555
    },
     
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react', 'stage-2']
             }
          }
       ]
    }
 }
 
 module.exports = config;