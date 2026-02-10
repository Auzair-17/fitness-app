import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

import { fetchData, excerciseOptions } from "../utils/fetchData";

const SearchExcercises = () => {
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleSearch = async () => {
    if (!searchedTerm) return;
    const searchResult = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=10",
      excerciseOptions,
    );
    console.log(searchResult);
  };

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" }, textAlign: "center" }}
        mb="50px"
      >
        Awesome Excercises You <br />
        Should Know
      </Typography>

      <Box mb="72px" position="relative">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
            },

            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          placeholder="Search Excercises"
          type="text"
          value={searchedTerm}
          onChange={(e) => {
            setSearchedTerm(e.target.value.toLowerCase());
          }}
        />
        <Button
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
