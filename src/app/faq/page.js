import { imageURL } from "@/assets/image";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "FAQ - Frequently Asked Questions | LinkedIn Banner Creator",
  description: "Find answers to common questions about creating LinkedIn banners, image dimensions, download formats, and how to use our free banner maker tool.",
};

function FAQ() {
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
                Frequently Asked Questions
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
                  href="/about-us"
                >
                  About
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
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto", marginBottom: "50px" }}>
          <Typography variant="h2" sx={{ textAlign: "center", color: "#2d3748", marginBottom: "40px", fontWeight: "600" }}>
            Got Questions? We've Got Answers
          </Typography>

          <Box sx={{ marginTop: "30px" }}>
            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Is this tool completely free to use?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Yes! Our LinkedIn banner creator is 100% free with no hidden costs, subscriptions, or premium features.
                You can create and download as many banners as you want without any limitations.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                What are the dimensions of the downloaded banner?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                All banners are exported in LinkedIn's recommended dimensions: 1584 pixels wide by 396 pixels tall.
                This ensures your banner looks perfect on LinkedIn without any cropping or distortion.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Do I need to create an account or sign up?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                No registration required! You can start creating your LinkedIn banner immediately without providing any
                personal information or creating an account. Simply visit the site and start designing.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Where do the images come from?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                We source high-quality professional images from Unsplash, a leading platform for free stock photography.
                All images are licensed for free use, ensuring you can use them professionally on your LinkedIn profile.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Can I upload my own images?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Currently, our tool works with our curated library of professional stock images. This ensures all banners
                maintain high quality and professional standards. You can search thousands of images across various categories
                to find the perfect match for your brand.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Will there be watermarks on my downloaded banner?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                No watermarks! Your downloaded banner is completely clean and ready to use on LinkedIn without any branding
                or watermarks from our tool.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                How do I upload my banner to LinkedIn?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                After downloading your banner: (1) Go to your LinkedIn profile, (2) Click the camera icon on your current
                banner/header area, (3) Select "Upload photo", (4) Choose your downloaded banner file, (5) Adjust positioning
                if needed, and (6) Click "Apply". Your new professional banner will be live immediately!
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Can I edit my banner after downloading?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                The downloaded banner is a final PNG image. If you want to make changes, simply come back to our tool,
                enter your updated information, select your preferred image, and download a new banner. It only takes a minute!
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Does this work on mobile devices?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Yes! Our banner creator is fully responsive and works perfectly on smartphones, tablets, and desktop computers.
                You can create and download professional banners from any device with a web browser.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                What file format are the banners downloaded in?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                Banners are downloaded as PNG files, which provide high quality and wide compatibility. PNG format ensures
                your banner maintains crisp text and image quality when uploaded to LinkedIn.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                Can I use these banners for other social media platforms?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                While our tool is optimized specifically for LinkedIn's banner dimensions, you can certainly use the downloaded
                images on other platforms. However, you may need to crop or resize them to fit other social media specifications
                (Twitter, Facebook, etc.).
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <Typography variant="h5" sx={{ color: "#667eea", marginBottom: "10px", fontWeight: "600" }}>
                How many banners can I create?
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
                There's no limit! Create and download as many different banner variations as you'd like. Feel free to
                experiment with different images, text combinations, and styles until you find the perfect one.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ marginTop: "50px", padding: "30px", backgroundColor: "#edf2f7", borderRadius: "10px", textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#2d3748", marginBottom: "15px", fontWeight: "600" }}>
              Still Have Questions?
            </Typography>
            <Typography variant="body1" sx={{ color: "#4a5568", lineHeight: "1.8", fontSize: "16px" }}>
              We're here to help! If your question isn't answered above, feel free to reach out through our contact page
              or check out our detailed how-to guide.
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
              <Link href="/how-to-use" style={{ textDecoration: "none", marginRight: "20px" }}>
                <Typography component="span" sx={{ color: "#667eea", fontWeight: "500", fontSize: "16px" }}>
                  View How-To Guide →
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default FAQ;
