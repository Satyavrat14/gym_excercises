export const ExerciseOptions = {
  method: "GET",
  params: {
    limit: "10",
    offset: "0",
  },
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
