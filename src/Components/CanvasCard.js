import React, { useEffect, useRef } from "react";
import { saveAs } from "file-saver";

function CanvasCard(props) {
  const { imageURL, title } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageURL;

    img.onload = () => {
      const width = 800;
      const height = 300;
      canvas.width = width;
      canvas.height = height;
      context.imageSmoothingEnabled = true;
      context.drawImage(img, 0, 0, width, height);

      context.font = "bold 26px Arial";
      context.fillStyle = "black";
      context.fillText(title, 20, 250);
    };
  }, [imageURL, title]);

  const downloadCanvasAsImage = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      alert("Canvas not found.");
      return;
    }

    canvas.toBlob((blob) => {
      if (blob) {
        saveAs(blob, "card_image.png");
      } else {
        alert("Failed download!");
      }
    });
  };

  return (
    <canvas
      id="myCanvas"
      onClick={downloadCanvasAsImage}
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    ></canvas>
  );
}

export default CanvasCard;

{
  /* <CanvasCard
                      imageURL={value.urls.regular}
                      title="Dhruvi Dhameliya"
                    /> */
}
