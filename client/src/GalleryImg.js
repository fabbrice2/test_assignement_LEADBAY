import React from "react";

function GalleryImg({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="h-auto max-w-full rounded-lg"
            src={image.imgUrl}
            alt={`Scraped img ${index}`}
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryImg;
