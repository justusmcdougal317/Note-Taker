const path = require('path');

module.exports = {
  entry: './path/to/your/saveData.js',
  output: {
    filename: 'db.json',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000, // or any other port you prefer
  },
}