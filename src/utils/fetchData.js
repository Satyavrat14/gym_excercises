export const ExerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const Response = await fetch(url, options);
  const data = await Response.json();

  return data;
};
