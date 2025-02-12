import React from 'react'

const Display = ({ image, goBackward, goForward, getRandomImage }) => {
  return (
    <div className="display">
      <button onClick={goBackward}>◀ Prev</button>
      <img src={image} alt="Displayed" className="large-image" />
      <button onClick={goForward}>Next ▶</button>
      <button onClick={getRandomImage}>🔀 Random</button>
    </div>
  )
}

export default Display