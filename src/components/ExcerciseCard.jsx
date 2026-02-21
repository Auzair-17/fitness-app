import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { excerciseOptions } from "../utils/fetchData";
import { Button, Stack, Typography } from "@mui/material";

const ExcerciseCard = ({ excercise }) => {
  const [gifUrl, setGifUrl] = useState(null);

  useEffect(() => {
    let objectUrl;

    const loadGif = async () => {
      try {
        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/image?resolution=180&exerciseId=0001`,
          excerciseOptions,
        );

        if (!response.ok) throw new Error("Failed to fetch gif");

        const blob = await response.blob();
        objectUrl = URL.createObjectURL(blob);
        setGifUrl(objectUrl);
      } catch (err) {
        console.error(err);
      }
    };

    loadGif();

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, []);

  return (
    <Link className="exercise-card" to={`/excercise/${excercise.id}`}>
      <img src={gifUrl} alt={excercise.name} loading="lazy" />

      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {excercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {excercise.target}
        </Button>
      </Stack>

      <Typography
        color="#000"
        ml="21px"
        fontSize="22px"
        fontWeight="bold"
        mt="11px"
        textTransform="capitalize"
        pb="10px"
      >
        {excercise.name}
      </Typography>
    </Link>
  );
};

export default ExcerciseCard;
