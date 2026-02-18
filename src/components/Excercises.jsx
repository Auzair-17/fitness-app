import { Box, Pagination, Stack, Typography } from "@mui/material";
import ExcerciseCard from "./ExcerciseCard";
import React, { useState, useEffect } from "react";
import { excerciseOptions, fetchData } from "../utils/fetchData";

const Excercises = ({ excercises, setExcercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const excercisesPerPage = 9;

  const indexOfLastExcercise = currentPage * excercisesPerPage;
  const indexOfFirstExcercise = indexOfLastExcercise - excercisesPerPage;
  const currentExcercises = excercises.slice(
    indexOfFirstExcercise,
    indexOfLastExcercise,
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExcercisesData = async () => {
      let excercisesData = [];

      if (bodyPart === "all") {
        excercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises`,
          excerciseOptions,
        );
      } else {
        excercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          excerciseOptions,
        );
      }
      setExcercises(excercisesData);
    };

    fetchExcercisesData();
  }, [bodyPart]);

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
        {currentExcercises.map((excercise, i) => (
          <ExcerciseCard key={i} excercise={excercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {excercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            size="large"
            defaultPage={1}
            count={Math.ceil(excercises.length / excercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Excercises;
