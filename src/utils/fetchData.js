export const excerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_YOUTUBE_API_KEY,
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) throw new Error("Erro fetching excercises data");

    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
