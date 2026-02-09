import { Box, Button, Typography } from "@mui/material";

import heroBannerImage from "../assets/images/banner.png";
import React from "react";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      p="20px"
      position="relative"
    >
      <Typography fontWeight="600" fontSize="26px" color="#ff2625">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mt="30px"
        mb="23px"
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effective excercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#excercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px 20px" }}
      >
        Explore Excercises
      </Button>

      <Typography
        fontWeight={600}
        fontSize="200px"
        sx={{
          opacity: ".1",
          display: { lg: "block", xs: "none" },
          color: "#ff2625",
        }}
      >
        Excercise
      </Typography>

      <img src={heroBannerImage} alt="hero image" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
