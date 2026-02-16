import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { excerciseOptions } from "../utils/fetchData";

const ExcerciseCard = ({ excercise }) => {
  console.log(excercise);
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
        console.log(gifUrl);
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
    </Link>
  );
};

export default ExcerciseCard;
