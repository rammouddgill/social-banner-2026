import { Card, Grid, Skeleton } from "@mui/material";
import React from "react";

function SkeletonCard() {
  return (
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
      {Array(10)
        .fill()
        .map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ position: "relative", width: "100%" }}>
              <Skeleton
                sx={{
                  bgcolor: "grey.300",
                  width: "100%",
                  height: "calc(100vw / 4)",
                  maxWidth: "792px",
                  maxHeight: "198px",
                }}
                variant="rectangular"
              />
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

export default SkeletonCard;
