import React from 'react'
import { Route } from 'react-router-dom'
import Calendar from './components/Calendar'
import ImageGallery from './components/ImageGallery'
import NavBar from './components/Nav/Navbar'

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Route exact path="/" component={ImageGallery} />
        <Route path="/contact" component={Calendar} />
      </div>
    </div>
  )
}

export default App
