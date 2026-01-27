import { imageURL } from "@/assets/image";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "How to Create LinkedIn Banner - Step by Step Guide",
  description: "Learn how to create professional LinkedIn banners in minutes. Easy step-by-step guide for designing and downloading custom profile banners.",
};

function HowToUse() {
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
                How to Use
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
                  Terms
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

        <Box sx={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
          <Typography variant="h2" sx={{ textAlign: "center", color: "#2d3748", marginBottom: "30px", fontWeight: "600" }}>
            Create Your LinkedIn Banner in 5 Simple Steps
          </Typography>

          <Typography variant="body1" sx={{ color: "#4a5568", marginBottom: "30px", lineHeight: "1.8", fontSize: "16px", textAlign: "center" }}>
            Follow this easy guide to create a professional LinkedIn banner that makes you stand out
          </Typography>

          <Box sx={{ marginTop: "40px" }}>
            <Box sx={{ marginBottom: "35px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px", borderLeft: "4px solid #667eea" }}>
              <Typography variant="h4" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Step 1: Enter Your Information
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Start by filling in your full name, email, and job title/designation in the form fields at the top of the page.
                This information will appear on your LinkedIn banner, so make sure it's accurate and professional.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "35px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px", borderLeft: "4px solid #764ba2" }}>
              <Typography variant="h4" sx={{ color: "#764ba2", marginBottom: "10px", fontWeight: "600" }}>
                Step 2: Search or Browse Images
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Use the search bar to find images related to your profession, industry, or interests. You can search for terms like
                "technology", "marketing", "nature", or any keyword that represents your professional brand. Alternatively, browse
                through the default image collection.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "35px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px", borderLeft: "4px solid #667eea" }}>
              <Typography variant="h4" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Step 3: Select Your Job Category
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Choose your professional category from the dropdown menu. We offer 20+ categories including Software Engineer,
                Marketing Professional, Photographer, Designer, and more. This helps filter images that match your profession.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "35px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px", borderLeft: "4px solid #764ba2" }}>
              <Typography variant="h4" sx={{ color: "#764ba2", marginBottom: "10px", fontWeight: "600" }}>
                Step 4: Preview Your Banner
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Scroll through the available images and see your information overlaid on each one in real-time. Each image shows
                exactly how your final banner will look with your name and designation displayed professionally.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "35px", padding: "25px", backgroundColor: "#f7fafc", borderRadius: "10px", borderLeft: "4px solid #667eea" }}>
              <Typography variant="h4" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Step 5: Download Your Banner
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Found the perfect image? Simply click the download icon on your chosen banner. Your custom LinkedIn banner will be
                downloaded instantly in the perfect dimensions (1584x396 pixels) - ready to upload to your LinkedIn profile!
              </Typography>
            </Box>
          </Box>

          <Box sx={{ marginTop: "50px", padding: "30px", backgroundColor: "#edf2f7", borderRadius: "10px" }}>
            <Typography variant="h4" sx={{ color: "#2d3748", marginBottom: "20px", fontWeight: "600", textAlign: "center" }}>
              Pro Tips for Best Results
            </Typography>
            <Box component="ul" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px", paddingLeft: "20px" }}>
              <li>Choose images that reflect your industry and professional brand</li>
              <li>Keep your designation clear and concise (e.g., "Senior Marketing Manager" instead of long titles)</li>
              <li>Use high-quality images for better visual impact</li>
              <li>Scroll down to load more images if you don't find the perfect one initially</li>
              <li>Try different search terms to explore various professional themes</li>
              <li>Make sure your text is readable against the background image</li>
            </Box>
          </Box>

          <Box sx={{ marginTop: "40px", textAlign: "center" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography variant="h5" sx={{ color: "#667eea", fontWeight: "600", cursor: "pointer" }}>
                Ready to Create Your Banner? Get Started Now →
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HowToUse;
