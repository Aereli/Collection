import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import mapFeatures from '../../data/geomap.json'

const GeoMap = () => {
  useEffect(() => {
    function MapBox() {
      mapboxgl.accessToken = process.env.REACT_APP_MAPBOX
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-80.18138282245602, 25.83468232401341],
        zoom: 9, // starting zoom
      })
      map.on('load', function () {
        map.loadImage(
          'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
          function (error, image) {
            if (error) throw error
            map.addImage('custom-marker', image)
            // Add a GeoJSON source with multiple points via geomap.json
            map.addSource('points', {
              type: 'geojson',
              data: mapFeatures,
            })

            map.addLayer({
              id: 'points',
              type: 'symbol',
              source: 'points',
              layout: {
                'icon-image': 'custom-marker',
                // get the title name from the source's "title" property
                'text-field': ['get', 'title'],
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 1.25],
                'text-anchor': 'top',
              },
            })
          }
        )
      })
    }
    MapBox()
  }, [])

  return (
    <div>
      <h1>MAP-BOX</h1>
      <div id="map" style={{ width: `400px`, height: `300px` }} />
    </div>
  )
}

export default GeoMap
