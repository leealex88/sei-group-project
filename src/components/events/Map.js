import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibGlseWxhZGF5IiwiYSI6ImNqeHJheW5vdDAyeDczY3FvbDRyNTZ6ZXQifQ.QM648rkVD0FPhWE5ow7vLQ'

class Map extends React.Component {
  constructor() {
    super()
    this.markers = []
  }

  componentDidMount() {
    const lng = parseFloat(this.props.locations.location.slice(0,6))
    const lat = parseFloat(this.props.locations.location.slice(7,13))
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 10,
      center: [lng, lat]

    })
    const el = document.createElement('div')
    el.className = 'marker mapMarker'
    el.innerHTML = '<img src="../assets/star.svg"/>'
    return new mapboxgl.Marker(el)
      .setLngLat({ lng: lng, lat: lat  })
      .addTo(this.map)






  }




  render() {
    console.log(this.props)
    if (!this.props.locations.location) return null
    return (
      <main>

        <div className="map" ref={el => this.mapDiv = el}/>
      </main>
    )
  }
}

export default Map
