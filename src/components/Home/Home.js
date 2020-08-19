import React from "react"
import Images from "../../data/images"
import "./style.scss"
import Gallery from "../Gallery/Gallery"
import Information from "../Information/Information"

const Home = () => {
  const home = Images.home[0].url
  return (
    <>
      <div className="homeContainer">
        <div className="homeHeader">
          <h1>Face Masks</h1>
          <h3>made by</h3>
          <h2>Connie Oyanadel</h2>
        </div>
        <div className="homeCircle">
          <img className="homeImage" src={home} alt="blackStripes" />
        </div>
      </div>
      <Information />
      <Gallery />
    </>
  )
}

export default Home
