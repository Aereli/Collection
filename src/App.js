import React from 'react'
import { Route } from 'react-router-dom'
import Calendar from './components/Calendar'
import GeoMap from './components/GeoMap'
import ImageGallery from './components/ImageGallery'
import NavBar from './components/Nav/Navbar'

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Route exact path="/" component={ImageGallery} />
        <Route path="/contact" component={Calendar} />
        <Route path="/geomap" component={GeoMap} />
      </div>
    </div>
  )
}

export default App
