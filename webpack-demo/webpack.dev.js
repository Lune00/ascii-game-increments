/**
 * Fichier de configuration Webpack pour l'environnement de dev
 */

//Grầce à webpack-merge on importe la config commune
 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
   },
 });