import React, { useState } from 'react';
import "../style.css";

export default function App() {
  const imagesData = [
    { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { src: "images/pic5.jpg", alt: "Large moth on a leaf" }
  ];

  const [displayedImage, setDisplayedImage] = useState(imagesData[0]);
  const [isDarkened, setIsDarkened] = useState(false);

  const ThumbnailClick = (image) => {
    setDisplayedImage(image);
    setIsDarkened(false); 
  };

  const DarkenButtonClick = () => {
    setIsDarkened(!isDarkened); 
  };

  return (
    <>
      <h1>Image gallery example</h1>
      <div className={`full-img `}>
        <img
          className="displayed-img"
          src={displayedImage.src}
          alt={displayedImage.alt}
        />
        <div className="overlay" style={isDarkened ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : {}}></div>
        <button className="dark" onClick={DarkenButtonClick}>
          {isDarkened ? 'Lighten' : 'Darken'}
        </button>
      </div>
      <div className="thumb-bar">
        {imagesData.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => ThumbnailClick(image)}
          />
        ))}
      </div>
    </>
  );
}
