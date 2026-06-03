
import React, { useState } from "react";

function App() {

  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Image
  const nextImage = () => {

    setCurrentIndex(
      (currentIndex + 1) % images.length
    );

  };

  // Previous Image
  const prevImage = () => {

    setCurrentIndex(
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1
    );

  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>

      <h1>Image Slider</h1>

      <img
        src={images[currentIndex]}
        alt="slider"
        width="600"
        height="300"
      />

      <br /><br />

      <button onClick={prevImage}>
        Previous
      </button>

      <button
        onClick={nextImage}
        style={{ marginLeft: "10px" }}
      >
        Next
      </button>

    </div>
  );
}

export default App;
```
