const path = require('path');

module.exports = {
  pages: {
    // usarlas como partes dentro de cada page
    home: {
      entry: ['./src/pages/home/main.js'],
      template: 'public/home.html',
      filename: 'index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'home'],
    },
    filter: {
      entry: ['./src/pages/filter/main.js'],
      template: 'public/filter.html',
      filename: 'filtro.html',
      title: 'Filter',
      chunks: ['chunk-vendors', 'chunk-common', 'filter'],
    },
    descripcion: {
      entry: ['./src/pages/descripcion/main.js'],
      template: 'public/descripcion.html',
      filename: 'descripcion.html',
      title: 'Descripcion',
      chunks: ['chunk-vendors', 'chunk-common', 'descripcion'],
    },
    carritocompras: {
      entry: ['./src/pages/carritocompras/main.js'],
      template: 'public/ventanaCarrito.html',
      filename: 'carritocompras.html',
      title: 'VentanaCarrito',
      chunks: ['chunk-vendors', 'chunk-common', 'carritocompras'],
    },
    clienteono: {
      entry: ['./src/pages/clienteono/main.js'],
      template: 'public/clienteono.html',
      filename: 'login.html',
      title: 'VentanaCarrito',
      chunks: ['chunk-vendors', 'chunk-common', 'clienteono'],
    },
  },
};
