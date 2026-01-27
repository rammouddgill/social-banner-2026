import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { useState } from "react";
import BannerCard from "./BannerCard";
import Form from "./Form";
import Search from "./Search";
import SkeletonCard from "./SkeletonCard";
import InfiniteScroll from "react-infinite-scroll-component";

import { imageURL } from "@/assets/image";
import { useEffect } from "react";
import { analytics } from "@/config/Firebase";
import Link from "next/link";

function Banner(props) {
  const {
    fetchRequest,
    res,
    setRes,
    setPage,
    setSelectedOption,
    selectedOption,
    loading,
    searchTerm,
    setSearchTerm,
    error,
  } = props;

  const isMobileView = useMediaQuery(`(max-width: 899px)`);

  const [fullname, setFullname] = useState("Marceline Avila");
  const [email, setEmail] = useState("marceline@gmail.com");
  const [designation, setDesignation] = useState("");
  // const [eventCount, setEventCount] = useState();

  const searchImage = () => {
    setRes([]);
    setPage(1);
    fetchRequest();
  };

  // useEffect(() => {
  //   if (eventCount?.id !== undefined) {
  //     logEvent(analytics, "download_image", {
  //       content_type: "image",
  //       content_id: eventCount.id,
  //     });
  //   }
  // }, [eventCount]);

  const handleDownload = async (cardRef, hiddenCard, value) => {
    if (cardRef) {
      const downloadWidth = 1584;
      const downloadHeight = 396;

      const textElement = document.getElementById(value.id);
      if (textElement) {
        textElement.style.minWidth = "1584px";
      }

      document.getElementById(hiddenCard).style.display = "block";

      html2canvas(cardRef, {
        useCORS: true,
        width: downloadWidth,
        height: downloadHeight,
        scale: 1,
      }).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        const blob = dataURItoBlob(dataURL);
        saveAs(blob, `Linkdin-Poster`);
        if (textElement) {
          textElement.style.minWidth = "";
        }

        document.getElementById(hiddenCard).style.display = "none";
      });
      // setEventCount(value);
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        paddingLeft: isMobileView ? 0 : 24,
        paddingRight: isMobileView ? 0 : 24,
      }}
    >
      <InfiniteScroll
        dataLength={res.length}
        next={fetchRequest}
        hasMore={true}
        loader={
          <p style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </p>
        }
        endMessage={<p>No more data to load.</p>}
      >
        <Box
          sx={{
            backgroundColor: "rgb(247 247 247)",
            borderRadius: { lg: "20px", md: "20px", sm: "0", xs: "0" },
            overflow: "hidden",
            marginTop: { lg: "20px", md: "20px", sm: "0", xs: "0" },
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <Box
              sx={{
                paddingTop: "10px",
                paddingLeft: "30px",
                paddingRight: "15px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "25px",
                  fontSize: {
                    lg: "34px",
                    md: "28px",
                    sm: "26px",
                    xs: "22px",
                  },
                }}
              >
                Find images and Make your Banner
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5px",
                  fontSize: {
                    lg: "16px",
                    md: "15px",
                    sm: "13px",
                    xs: "12px",
                  },
                }}
              >
                Please enter your name and job title to customize your banner,
                and then you can proceed to download it.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ mt: 2, color: "white", textAlign: "center", pb: 3 }}
              >
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/privacy-policy"
                >
                  Privacy
                </Link>
                |
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/terms-and-conditions"
                >
                  Term & Condition
                </Link>
                |
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/about-us"
                >
                  About us
                </Link>
                |
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/disclaimer"
                >
                  Disclaimer
                </Link>
              </Typography>
            </Box>
            <Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              searchImage={searchImage}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <Form
              setFullname={setFullname}
              setEmail={setEmail}
              setDesignation={setDesignation}
              fullname={fullname}
              email={email}
              designation={designation}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            {loading ? (
              <SkeletonCard />
            ) : (
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: "0px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  height: "auto",
                }}
              >
                {res.map((value, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                      <BannerCard
                        handleDownload={handleDownload}
                        value={value}
                        index={index}
                        fullname={fullname}
                        email={email}
                        designation={designation}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Box>
        </Box>
      </InfiniteScroll>
      {error && (
        <p style={{ display: "flex", justifyContent: "center" }}>
          Error: {error.message}
        </p>
      )}
    </Container>
  );
}

export default Banner;
