import { Box, Stack, Typography } from "@mui/material";
import ExcerciseCard from "./ExcerciseCard";
import React from "react";

const Excercises = ({ excercises, setExcercises, bodyPart }) => {
  return (
    <Box id="excercises" p="20px" mt="50px" sx={{ mt: { lg: "110px" } }}>
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {excercises.map((excercise, i) => (
          <ExcerciseCard key={i} excercise={excercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Excercises;
