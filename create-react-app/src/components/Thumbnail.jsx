import React from 'react'

const Thumbnail = ({ imagePaths, handleThumbnailClick }) => {
  return (
    <div className="thumbnails">
      {imagePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={`Thumbnail ${index + 1}`}
          className="thumbnail"
          onClick={() => handleThumbnailClick(index)}
        />
      ))}
    </div>
  );
};

export default Thumbnail