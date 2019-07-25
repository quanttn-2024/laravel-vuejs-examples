const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve('resources/assets/js'),
        'scss@': path.resolve('resources/assets/sass'),
        'public' : path.resolve('public'),
      },
    },
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.copyDirectory('resources/assets/img', 'public/img');

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
], 'public/css/app.css');

mix.scripts([
    'node_modules/admin-lte/dist/js/demo.js',
], 'public/js/app.js');

mix.disableNotifications();
