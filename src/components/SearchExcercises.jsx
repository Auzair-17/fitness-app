import { Box, Stack, TextField, Typography, Button } from "@mui/material";

const SearchExcercises = () => {
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
          value=""
          onChange={() => {}}
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
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
