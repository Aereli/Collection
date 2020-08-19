import React from "react"
import "./style.scss"
import maskGirl from "../../images/mask-girl.png"
import maskBoy from "../../images/mask-boy.png"
import person1 from "../../images/IMG_9021 2.JPG"
import person2 from "../../images/IMG_9022 2.JPG"
import person3 from "../../images/IMG_9023 2.JPG"

const Information = () => {
  return (
    <div className="container">
      <div className="content">
        <h2>Masks are washable!</h2>
        <p>
          If you have a specific design in mind request for it in the contact
          page.
        </p>
      </div>
      <div className="imageContainer">
        <img className="infoImage" src={maskGirl} />
        <img className="infoImage" src={maskBoy} />
        <img className="infoImage" src={person1} />
        <img className="infoImage" src={person2} />
        <img className="infoImage" src={person3} />
      </div>
    </div>
  )
}

export default Information
