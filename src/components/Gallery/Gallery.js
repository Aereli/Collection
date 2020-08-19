import React from "react"
import "./style.scss"
import data from "../../data/images"

const Gallery = () => {
  console.log(data.gallery)
  function Images() {
    return (
      <div className="imageBackground">
        {data.gallery.map((el) => (
          <div className="imageElement">
            <img className="image" src={el.url} alt={el.title} />
            <h3>{el.title}</h3>
            <p>{el.price}</p>
          </div>
        ))}
      </div>
    )
  }
  return <div className="container">{Images()}</div>
}

export default Gallery
