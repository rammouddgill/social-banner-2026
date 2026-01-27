import { imageURL } from "@/assets/image";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function disclaimer() {
  return (
    <Container>
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
              Social Banner Maker
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
                sx={{
                  mr: 1,
                  cursor: "pointer",
                  color: "white",
                }}
                href="/"
              >
                Home
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
                sx={{
                  mr: 1,
                  ml: 1,
                  cursor: "pointer",
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
        </Box>
      </Box>
      <h1 style={{ textAlign: "center" }}>
        Disclaimer for social banner maker
      </h1>

      <p>
        If you require any more information or have any questions about our
        sites disclaimer, please feel free to contact us by email at
        socialbanner@gmail.com.
      </p>

      <h2>Disclaimers for social banner maker</h2>

      <p>
        All the information on this website - https://social-banner.netlify.app/
        - is published in good faith and for general information purpose only.
        social banner maker does not make any warranties about the completeness,
        reliability and accuracy of this information. Any action you take upon
        the information you find on this website (social banner maker), is
        strictly at your own risk. social banner maker will not be liable for
        any losses and/or damages in connection with the use of our website.
      </p>

      <p>
        From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone bad.
      </p>

      <p>
        Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their <b>Terms of Service</b> before engaging in any business or
        uploading any information.
      </p>

      <h2>Consent</h2>

      <p>
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </p>

      <h2>Update</h2>

      <p>
        Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </Container>
  );
}

export default disclaimer;
