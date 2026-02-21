import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { excerciseOptions, fetchData } from "../utils/fetchData";

import Detail from "../components/Detail";
import ExcerciseVideos from "../components/ExcerciseVideos";
import SimilarExcercises from "../components/SimilarExcercises";

const ExcerciseDetail = () => {
  const [excerciseDetail, setExcerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExcercieData = async () => {
      const excerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const excerciseDetailData = await fetchData(
        `${excerciseDbUrl}/exercises/exercise/${id}`,
        excerciseOptions,
      );
      setExcerciseDetail(excerciseDetailData);
    };

    fetchExcercieData();
  }, [id]);

  return (
    <Box>
      <Detail excerciseDetail={excerciseDetail} />
      <ExcerciseVideos />
      <SimilarExcercises />
    </Box>
  );
};

export default ExcerciseDetail;
