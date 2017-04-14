'use strict'

require( 'babel-polyfill' )

const browserify  = require( 'browserify' )
const buffer      = require( 'vinyl-buffer' )
const gulp        = require( 'gulp' )
const uglify      = require( 'gulp-uglify' )
const source      = require( 'vinyl-source-stream' )
const babel       = require( 'gulp-babel' );
const L           = require( 'leaflet' )

gulp.task( 'js', function ( cb ) {
  browserify( {
    entries: [ 'src/map.js' ]
  } )
  .bundle()
  .pipe( source( 'map.min.js' ) )
  .pipe( buffer() )
  .pipe( babel( {
      presets: ['es2015']
  } ) )
  .pipe( uglify() )
  .pipe( gulp.dest( 'js' ) )
  .on( 'end', cb )
} )

gulp.task( 'default', [
  'js',
] )
