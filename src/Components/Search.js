import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import FilteredImages from "./FilteredImages";

function Search(props) {
  const {
    searchTerm,
    setSearchTerm,
    searchImage,
    selectedOption,
    setSelectedOption,
  } = props;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: { lg: "53px", md: "65px", sm: "70px", xs: "60px" },
        marginLeft: { lg: "7%", md: "6%", sm: "5%", xs: "3%" },
      }}
      columns={16}
    >
      <Grid item xs={7} md={9} sm={9}>
        <TextField
          id="demo-helper-text-aligned-no-helper"
          placeholder="Search here"
          size="small"
          focused
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              searchImage();
            }
          }}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            input: {
              fontSize: "1rem",
              padding: "0px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  onClick={searchImage}
                  sx={{
                    backgroundColor: "rgb(247 247 247)",
                    color: "black",
                    padding: "7px",
                    borderRadius: "19px",
                    marginRight: "-10px",
                    cursor: "pointer",
                    width: "21px",
                    height: "21px",
                  }}
                />
              </InputAdornment>
            ),
            style: {
              borderRadius: "5px",
              backgroundColor: "#ffffff",
              border: "none",
              boxShadow:
                "0 1px 2px 0 rgba(48, 48, 48, .30), 0 1px 3px 1px rgba(48, 48, 48, .15)",
              boxSizing: "border-box",
              color: " #1f1f1f",
              fontSize: "1rem",
              height: "3rem",
              padding: "1rem",
              width: "100%",
              fontFamily: "'Poppins', sans-serif",
            },
          }}
        />
      </Grid>
      <Grid item xs={7} md={6} sm={6}>
        <FilteredImages
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </Grid>
    </Grid>
  );
}

export default Search;
