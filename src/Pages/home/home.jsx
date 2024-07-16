import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../../components/heroBanner/heroBanner";
import SearchExercises from "../../components/searchExercises/searchExercises";
import Exercises from "../../components/exercises/exercises";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
