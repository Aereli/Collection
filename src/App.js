import React from "react"
import "./App.css"
import Images from "./data/images"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Thanks from "./components/Thanks/Thanks"
import Contact from "./components/Contact/Contact"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Gallery from "./components/Gallery/Gallery"

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Contact} path="/contact" />
          <Route component={Thanks} path="/contact/thanks" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
