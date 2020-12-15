import React, { useState } from 'react'
import styles from './style.module.css'
import images from '../../data/images.json'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

export default function ImageGallery() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const allImages = images.map((item) => item.url)

  function imageHandler(item) {
    setPhotoIndex(item - 1)
    setIsOpen(true)
  }

  return (
    <div className={styles.background}>
      <div className={styles.images}>
        {images.map((item) => (
          <img
            className={styles.singleImage}
            src={item.url}
            alt={item.id}
            onClick={() => imageHandler(item.id)}
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={allImages[photoIndex]}
          nextSrc={allImages[(photoIndex + 1) % allImages.length]}
          prevSrc={
            allImages[(photoIndex + allImages.length - 1) % allImages.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + allImages.length - 1) % allImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allImages.length)
          }
        ></Lightbox>
      )}
    </div>
  )
}
