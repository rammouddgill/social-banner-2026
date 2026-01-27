import { imageURL } from "@/assets/image";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact Us - LinkedIn Banner Creator Support",
  description: "Get in touch with our team for support, feedback, or questions about creating LinkedIn banners. We're here to help you succeed.",
};

function Contact() {
  return (
    <>
      <Container>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: { lg: "20px", md: "20px", sm: "0", xs: "0" },
            overflow: "hidden",
            marginTop: { lg: "20px", md: "20px", sm: "0", xs: "0" },
            marginBottom: "20px",
            boxShadow: { lg: "0 20px 60px rgba(0, 0, 0, 0.3)", md: "0 20px 60px rgba(0, 0, 0, 0.3)", sm: "none", xs: "none" },
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
                Contact Us
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
                  href="/how-to-use"
                >
                  How to Use
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
                  href="/faq"
                >
                  FAQ
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
                  About
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", marginBottom: "50px" }}>
          <Typography variant="h2" sx={{ textAlign: "center", color: "#2d3748", marginBottom: "20px", fontWeight: "600" }}>
            We'd Love to Hear From You
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "center", color: "#4a5568", marginBottom: "40px", lineHeight: "1.8", fontSize: "16px" }}>
            Have questions, feedback, or suggestions? We're here to help make your LinkedIn banner creation experience better.
          </Typography>

          <Box sx={{ marginTop: "40px" }}>
            <Box sx={{ marginBottom: "30px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                General Inquiries
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                For general questions about our platform, features, or how to use the LinkedIn banner creator,
                please check our <Link href="/faq" style={{ color: "#667eea", textDecoration: "none", fontWeight: "500" }}>FAQ page</Link> first.
                Most common questions are answered there.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Technical Support
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Experiencing technical issues or bugs? We want to know! Please provide as much detail as possible including:
              </Typography>
              <Box component="ul" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px", paddingLeft: "20px", marginTop: "10px" }}>
                <li>The device and browser you're using</li>
                <li>Steps to reproduce the issue</li>
                <li>Screenshots if possible</li>
                <li>Any error messages you received</li>
              </Box>
            </Box>

            <Box sx={{ marginBottom: "30px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Feature Requests
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                We're constantly improving our platform based on user feedback. Have an idea for a new feature or improvement?
                We'd love to hear it! Your suggestions help us build a better tool for everyone.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Partnership & Business Inquiries
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Interested in partnering with us, integrating our tool, or exploring business opportunities?
                We're open to collaboration and would be happy to discuss potential partnerships.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ marginTop: "50px", padding: "30px", backgroundColor: "#edf2f7", borderRadius: "10px", textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#2d3748", marginBottom: "15px", fontWeight: "600" }}>
              Response Time
            </Typography>
            <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
              We strive to respond to all inquiries within 24-48 hours during business days. Thank you for your patience
              and for choosing LinkedIn Banner Studio!
            </Typography>
          </Box>

          <Box sx={{ marginTop: "40px", textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: "#4a5568", marginBottom: "15px", fontSize: "16px" }}>
              Before reaching out, you might find these helpful:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
              <Link href="/how-to-use" style={{ textDecoration: "none" }}>
                <Typography sx={{ color: "#667eea", fontWeight: "500" }}>How to Use Guide →</Typography>
              </Link>
              <Link href="/faq" style={{ textDecoration: "none" }}>
                <Typography sx={{ color: "#667eea", fontWeight: "500" }}>FAQ →</Typography>
              </Link>
              <Link href="/about-us" style={{ textDecoration: "none" }}>
                <Typography sx={{ color: "#667eea", fontWeight: "500" }}>About Us →</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Contact;
