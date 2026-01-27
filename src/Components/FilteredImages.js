import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

function FilteredImages(props) {
  const { setSelectedOption, selectedOption } = props;

  return (
    <FormControl
      className="disable-text-select"
      sx={{
        width: {
          lg: "70%",
          md: "75%",
          sm: "75%",
          xs: "100%",
        },
        "& fieldset": {
          border: "none",
        },
        borderRadius: "5px",
        backgroundColor: "#ffffff",
        border: "none",
        boxShadow:
          "0 1px 2px 0 rgba(48, 48, 48, .30), 0 1px 3px 1px rgba(48, 48, 48, .15)",
        boxSizing: "border-box",
        color: " #1f1f1f",
        fontSize: "1rem",
        height: "3rem",
        padding: "3px",
      }}
      size="small"
    >
      <Select
        placeholder="Select Category"
        value={selectedOption || "category"}
        onChange={(e) => setSelectedOption(e.target.value)}
        sx={{ fontFamily: "'Poppins', sans-serif", width: "100%" }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: "300px",
            },
          },
        }}
      >
        <MenuItem
          disabled
          value="category"
          sx={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Select Category
        </MenuItem>
        {[
          "Information Technology (IT)",
          "Service Officer",
          "Graphics Design",
          "Telecommunications",
          "Marketing and Advertising",
          "Fashion Designer",
          "Education",
          "Entertainment",
          "photographer",
          "Human resources(HR)",
          "Environmental Services",
          "Artificial Intelligence Engineer",
          "Commis Chef",
          "Software Engineer",
          "Project Manager",
          "Cashier",
          "IT Recruiter",
          "Data Entry",
          "Digital Marketing",
          "UI Automation Test Engineer",
        ].map((data, index) => (
          <MenuItem
            value={data}
            key={index}
            sx={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {data}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FilteredImages;
