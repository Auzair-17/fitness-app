import React from "react";
import { Stack } from "@mui/material";
import icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        width: "270px",
        height: "280px",
        backgroundColor: "#fff",
        gap: "47px",
        cursor: "pointer",
        borderBottomLeftRadius: "20px",
      }}
    >
      <img src={icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
    </Stack>
  );
};

export default BodyPart;
