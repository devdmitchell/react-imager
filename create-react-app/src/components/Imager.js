import React, { useState } from 'react'
import Display from './Display'
import Thumbnail from './Thumbnail'

function Imager() {
    const imagePaths = [
        'images/kobeAllEyesOnMe.jpg',
        'images/KobeAround.jpg',
        'images/kobeDunk.jpg',
        'images/handsOnKnees.jpg',
        'images/kobeInThought.jpg',
        'images/kobeInUniformOnCourt.jpg',
        'images/kobeJerseyInMouth.jpg',
        'images/kobeLookingUp.jpg',
        'images/kobeMambaMentality.jpg',
        'images/kobeNumber8.jpg',
        'images/kobeNumber24.jpg',
        'images/kobeThankingTheFans.jpg'
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const getRandomImage = () => {
      setCurrentImageIndex(Math.floor(Math.random() * imagePaths.length));
    }
  
    const goBackward = () => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
      )
    }
  
    const goForward = () => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
      )
    }
  
    return (
      <div className="imager">
        <Display
          image={imagePaths[currentImageIndex]}
          goBackward={goBackward}
          goForward={goForward}
          getRandomImage={getRandomImage}
        />
        <Thumbnail 
          imagePaths={imagePaths} 
          handleThumbnailClick={setCurrentImageIndex} 
        />
      </div>
    )
  }
  
  export default Imager
