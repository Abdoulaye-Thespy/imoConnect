import { Image } from "./image";
import React, { useState } from "react";


export const Gallery = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.data.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
          Bienvenue sur la page de notre galerie immobilière, où vous découvrirez 
          une sélection exceptionnelle de propriétés disponibles à l'exploration ou à la location.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="arrow" onClick={previousImage}>
            <img src="img/left-arrows.png" className="arrow" alt="left-arrow" />

            </div>
            {props.data ? (
              <div
                key={`${props.data[currentIndex].title}-${currentIndex}`}
                className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                  title={props.data[currentIndex].title}
                  largeImage={props.data[currentIndex].largeImage}
                  smallImage={props.data[currentIndex].smallImage}
                  // &gt;
                  />
                  </div>
            ) : (
              "loading..."
            )}
            <div className="arrow" onClick={nextImage}>
            <img src="img/right-arrows.png" className="arrow" alt="right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
