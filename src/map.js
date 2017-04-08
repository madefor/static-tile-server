"use strict";

global.meta = require( '../tiles/metadata.json' );

var current = () => {
  let src = '';
  if ( document.currentScript ) {
     src = document.currentScript.src;
  } else {
    var scripts = document.getElementsByTagName( 'script' ),
    script = scripts[ scripts.length - 1 ];
    if ( script.src ) {
      src = script.src;
    }
  }
  return src.replace( '/js/map.min.js', '' )
};

if ( ! document.title ) {
  document.title = meta.name;
}

const bounds = meta.bounds.split( /,/ )
const southWest = new L.latLng( [ bounds[1], bounds[2] ] ),
  northEast = new L.latLng( [ bounds[3], bounds[0] ] ),
  bbox = new L.latLngBounds( southWest, northEast );
const center = meta.center.split( /,/ )

// `map` should be global.
global.map = L.map( meta.id, { maxBounds: bbox } ).setView( [ center[1], center[0] ], center[2] );

L.tileLayer( current() + '/tiles/{z}/{x}/{y}.png', {
  minZoom: meta.minzoom,
  maxZoom: meta.maxzoom,
  bounds: bbox,
  attribution: meta.attribution
} ).addTo( map );

const legend = L.control( { position: 'bottomright' } );

legend.onAdd = ( map ) => {
  this._div = L.DomUtil.create( 'div', 'legend' );
  this._div.innerHTML = meta.legend;
  return this._div;
}

legend.addTo( map );
