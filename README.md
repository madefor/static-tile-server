# Static Tile Server with a MBTiles on GitHub Pages

[![Build Status](https://travis-ci.org/madefor/static-tile-server.svg?branch=master)](https://travis-ci.org/madefor/static-tile-server)

This is an exmaple project of the static tile server with the GitHub Pages.

https://madefor.github.io/static-tile-server/

## Features

* Tile images are generated from `*.mbtiles` with [mb-util](https://github.com/mapbox/mbutil).
* Map and tiles are deployed with Travis CI automatically.

## Run Tile Server on Your Local Machine

```
$ git clone git@github.com:miya0001/tile-server.git
$ cd tile-server
$ pip install mbutil
$ npm install
$ npm run Build
$ npm start
```

## Customizing the MAP with Leaflet.

You can use `window.MAP` to customize the map object of the leaflet.

```
<script type="text/javascript">
  var center = MAP.meta.center.split( /,/ );
  L.marker( [ center[1], center[0] ] ).addTo( MAP );
</script>
```

`Map.meta` is the meta data from the `.mbtiles`.
