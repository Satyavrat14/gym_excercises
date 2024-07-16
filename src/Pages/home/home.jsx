import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../../components/heroBanner/heroBanner";
import SearchExercises from "../../components/searchExercises/searchExercises";
import Exercises from "../../components/exercises/exercises";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
