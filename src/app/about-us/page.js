import { imageURL } from "@/assets/image";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
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
                  fontWeight: "600",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "25px",
                  fontSize: {
                    lg: "38px",
                    md: "32px",
                    sm: "28px",
                    xs: "24px",
                  },
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                About Our Platform
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
        <Box sx={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
          <Typography variant="h2" sx={{ textAlign: "center", color: "#2d3748", marginBottom: "30px", fontWeight: "600" }}>
            About LinkedIn Banner Studio
          </Typography>

          <Typography variant="h4" sx={{ color: "#4a5568", marginBottom: "15px", fontWeight: "500" }}>
            Welcome to Your Professional Branding Partner
          </Typography>

          <Typography variant="body1" sx={{ color: "#4a5568", marginBottom: "20px", lineHeight: "1.8", fontSize: "16px" }}>
            LinkedIn Banner Studio is a cutting-edge online platform designed to help professionals, job seekers, entrepreneurs,
            and businesses create stunning LinkedIn profile banners with ease. In today's digital-first professional world,
            your LinkedIn profile is often the first impression you make on potential employers, clients, and business partners.
          </Typography>

          <Typography variant="body1" sx={{ color: "#4a5568", marginBottom: "20px", lineHeight: "1.8", fontSize: "16px" }}>
            We understand that visual branding matters. A professional, eye-catching LinkedIn banner can set you apart from
            millions of other profiles and showcase your personality, expertise, and professional brand. That's why we've created
            this free, user-friendly tool that requires no design skills or expensive software.
          </Typography>

          <Typography variant="h5" sx={{ color: "#4a5568", marginTop: "30px", marginBottom: "15px", fontWeight: "500" }}>
            Our Mission
          </Typography>

          <Typography variant="body1" sx={{ color: "#4a5568", marginBottom: "20px", lineHeight: "1.8", fontSize: "16px" }}>
            Our mission is to democratize professional branding by providing accessible, high-quality design tools to everyone.
            Whether you're a software engineer, marketing professional, photographer, or entrepreneur, we believe you deserve
            a LinkedIn banner that reflects your professional excellence.
          </Typography>

          <Typography variant="h5" sx={{ color: "#4a5568", marginTop: "30px", marginBottom: "15px", fontWeight: "500" }}>
            Why Choose Us?
          </Typography>

          <Box component="ul" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px", paddingLeft: "20px" }}>
            <li><strong>Completely Free:</strong> No hidden costs, no subscriptions, no watermarks</li>
            <li><strong>Thousands of Images:</strong> Access to a vast library of professional stock photos</li>
            <li><strong>Perfect Dimensions:</strong> All banners are exported in LinkedIn's optimal size (1584x396 pixels)</li>
            <li><strong>Instant Download:</strong> Create and download your banner in minutes</li>
            <li><strong>No Registration Required:</strong> Start designing immediately without creating an account</li>
            <li><strong>Mobile Friendly:</strong> Works seamlessly on desktop, tablet, and mobile devices</li>
          </Box>

          <Typography variant="body1" sx={{ color: "#4a5568", marginTop: "30px", marginBottom: "20px", lineHeight: "1.8", fontSize: "16px", fontWeight: "500" }}>
            Thank you for choosing LinkedIn Banner Studio. We're committed to helping you make a powerful first impression
            in your professional journey.
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "center", color: "#667eea", marginTop: "40px", fontSize: "18px", fontWeight: "500" }}>
            Start creating your professional banner today!
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default About;
