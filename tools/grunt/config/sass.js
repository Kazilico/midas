// Paths to use with `@import` within Sass source files
// --------------------------------------------------------------------
var path = require( 'path' );

var paths = require( 'bourbon' ).includePaths;
paths.push( path.resolve( __dirname, '../../../assets/styles' ) );
paths.push( path.resolve( __dirname, '../../../node_modules' ) );

var Eyeglass = require( 'eyeglass' ).Eyeglass;

var eyeglass = new Eyeglass( {

  // Eyeglass is initialized with `node-sass` options.
  // -------------------------------------------------------------------

  sourcemaps: true,
  includePaths: paths,
  style: 'expanded',

} );

module.exports = {

  sass: {

    options: eyeglass.sassOptions(),

    prod: {

      files: {
        'assets/build/css/midas.css': 'assets/styles/application.scss',
      }

    },

  },

};
