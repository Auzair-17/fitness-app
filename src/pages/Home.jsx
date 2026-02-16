import { Box } from "@mui/material";
import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercises";
import Excercises from "../components/Excercises";

const Home = () => {
  const [excercises, setExcercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercises
        excercises={excercises}
        setExcercises={setExcercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
