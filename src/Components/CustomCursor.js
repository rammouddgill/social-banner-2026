import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

function CustomCursor(props) {
  const { visible } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const cursorStyles = {
    position: "fixed",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    left: position.x + "px",
    top: position.y + "px",
    display: visible ? "block" : "none",
    background: "transparent",
    border: "2px solid #000",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
  };

  return <Box sx={cursorStyles}></Box>;
}

export default CustomCursor;
