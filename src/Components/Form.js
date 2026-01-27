import { Grid, TextField } from "@mui/material";
import React from "react";

function Form(props) {
  const {
    setFullname,
    setEmail,
    setDesignation,
    fullname,
    email,
    designation,
  } = props;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: 0,
        display: "flex",
        marginLeft: { md: "3%", sm: "2%", xs: "3%" },
        width: { sm: "124%" },
        paddingBottom: { lg: "6%", md: "6%", sm: "9%", xs: "11%" },
        marginTop: { lg: "2%", md: "2%", sm: "2%" },
      }}
    >
      <Grid
        item
        xs={10.5}
        sm={3}
        md={3}
        sx={{ width: "50%", display: "inline-grid" }}
      >
        <TextField
          id="demo-helper-text-aligned-no-helper"
          placeholder="Fullname"
          size="small"
          name="fullname"
          focused
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            input: {
              borderRadius: "5px",
              backgroundColor: "#ffffff",
              border: "none",
              boxShadow:
                "0 1px 2px 0 rgba(48, 48, 48, .30), 0 1px 3px 1px rgba(48, 48, 48, .15)",
              boxSizing: "border-box",
              color: " #1f1f1f",
              display: "block",
              fontSize: "1rem",
              height: "3rem",
              width: "100%",
              fontFamily: "'Poppins', sans-serif",
            },
          }}
        />
      </Grid>
      <Grid
        item
        xs={5.2}
        sm={3}
        md={3}
        sx={{ width: "50%", display: "inline-grid" }}
      >
        <TextField
          id="demo-helper-text-aligned-no-helper"
          placeholder="Email"
          size="small"
          name="email"
          focused
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            input: {
              borderRadius: "5px",
              backgroundColor: "#ffffff",
              border: "none",
              boxShadow:
                "0 1px 2px 0 rgba(48, 48, 48, .30), 0 1px 3px 1px rgba(48, 48, 48, .15)",
              boxSizing: "border-box",
              color: " #1f1f1f",
              display: "block",
              fontSize: "1rem",
              height: "3rem",
              width: "100%",
              fontFamily: "'Poppins', sans-serif",
            },
          }}
        />
      </Grid>
      <Grid
        item
        xs={5.3}
        sm={3}
        md={3}
        sx={{ width: "50%", display: "inline-grid" }}
      >
        <TextField
          id="demo-helper-text-aligned-no-helper"
          placeholder="Designation"
          size="small"
          name="Designation"
          focused
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            input: {
              borderRadius: "5px",
              backgroundColor: "#ffffff",
              border: "none",
              boxShadow:
                "0 1px 2px 0 rgba(48, 48, 48, .30), 0 1px 3px 1px rgba(48, 48, 48, .15)",
              boxSizing: "border-box",
              color: " #1f1f1f",
              display: "block",
              fontSize: "1rem",
              height: "3rem",
              width: "100%",
              fontFamily: "'Poppins', sans-serif",
            },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Form;
