import React, { useState } from 'react';
import "../style.css";

export default function App() {
  const imagesData = [
    { src: "https://img.esa.io/uploads/production/attachments/8704/2023/11/06/28750/aec23f5f-70aa-4301-9b46-56aedb01dd41.jpg", alt: "Closeup of a human eye" },
    { src: "https://img.esa.io/uploads/production/attachments/8704/2023/11/06/28750/b1b21aba-ec51-481d-aa0d-7a31c5f45f6d.jpg", alt: "Rock that looks like a wave" },
    { src: "https://img.esa.io/uploads/production/attachments/8704/2023/11/06/28750/8afb22f3-594c-4ffa-bf6a-7a6963634a2d.jpg", alt: "Purple and white pansies" },
    { src: "https://img.esa.io/uploads/production/attachments/8704/2023/11/06/28750/ad87bcd8-7276-4d72-a6f0-07249249cdc2.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { src: "https://img.esa.io/uploads/production/attachments/8704/2023/11/06/28750/d10919e2-5af1-487a-83dd-0c91ae0b15f9.jpg", alt: "Large moth on a leaf" }
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
      <div className={`full-img ${isDarkened ? 'darkened' : ''}`}>
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
