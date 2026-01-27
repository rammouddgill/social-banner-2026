import { Box, Card, CardMedia, Typography, useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
import DownloadIcon from "./DownloadIcon";

function BannerCard(props) {
  const { handleDownload, value, index, fullname, email, designation } = props;
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const cardRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isSmallScreenWidth = useMediaQuery(`(max-width: 400px)`);
  const isSmallScreenLeft = useMediaQuery(`(max-width: 365px)`);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(-1);
  };

  return (
    <Card sx={{ position: "relative", width: "100%" }}>
      <Box
        onMouseOver={() => handleMouseOver(index)}
        onMouseOut={handleMouseOut}
      >
        {!isSmallScreen && hoveredIndex === index && (
          <DownloadIcon
            isSmallScreenWidth={isSmallScreenWidth}
            isSmallScreenLeft={isSmallScreenLeft}
            handleDownload={handleDownload}
            cardRef={cardRef}
            value={value}
          />
        )}
        {isSmallScreen && (
          <DownloadIcon
            isSmallScreenWidth={isSmallScreenWidth}
            isSmallScreenLeft={isSmallScreenLeft}
            handleDownload={handleDownload}
            cardRef={cardRef}
            value={value}
          />
        )}
        <Box sx={{ borderRadius: "11px" }} id="visibleCard">
          <CardMedia
            sx={{
              width: "100%",
              height: " calc(100vw / 4)",
              maxWidth: "792px",
              maxHeight: " 198px",
            }}
            image={value.urls.regular}
            title="Image"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "-1px",
              left: "0",
              background:
                "linear-gradient( to top, rgba(0, 0, 0, 64%), transparent )",
              paddingTop: "60px",
              width: "792px",
              maxWidth: "100%",
              margin: 0,
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Typography
              id="fullname"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                marginRight: "10px",
                fontWeight: "600",
                fontSize: {
                  lg: 34,
                  md: 24,
                  sm: 20,
                  xs: 20,
                },
              }}
              variant="h4"
            >
              {fullname}
            </Typography>
            {designation ? (
              <Typography
                sx={{
                  marginBottom: "10px",
                  marginRight: "10px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: {
                    lg: 16,
                    md: 14,
                    sm: 13,
                    xs: 13,
                  },
                }}
                variant="subtitle1"
              >
                {designation}
              </Typography>
            ) : (
              <Typography
                sx={{
                  marginBottom: "10px",
                  marginRight: "10px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: {
                    lg: 16,
                    md: 14,
                    sm: 13,
                    xs: 13,
                  },
                }}
                variant="subtitle1"
              >
                {email}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          className="card-wrapper"
          sx={{
            borderRadius: "11px",
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
          }}
          ref={cardRef}
          id="hiddenCard"
        >
          <CardMedia
            sx={{
              height: "396px",
              width: "1584px",
            }}
            image={value.urls.regular}
            title="Image"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "-1px",
              left: "0",
              background:
                "linear-gradient( to top, rgba(0, 0, 0, 64%), transparent )",
              paddingTop: "60px",
              width: "1584px",
              maxWidth: "100%",
              margin: 0,
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
            id={value.id}
          >
            <Typography
              id="fullname"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                marginRight: "40px",
                fontWeight: "600",
                fontSize: "4.8rem",
              }}
              variant="h4"
            >
              {fullname}
            </Typography>
            {designation ? (
              <Typography
                sx={{
                  marginBottom: "40px",
                  marginRight: "40px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.9rem",
                }}
                variant="subtitle1"
              >
                {designation}
              </Typography>
            ) : (
              <Typography
                sx={{
                  marginBottom: "40px",
                  marginRight: "40px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.9rem",
                  fontWeight: 300,
                }}
                variant="subtitle1"
              >
                {email}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default BannerCard;
