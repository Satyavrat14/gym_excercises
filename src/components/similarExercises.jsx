import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./horizontalScrollBar";
import Loader from "./loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "10px", xs: "0px" } }}>
      <Typography variant="h3" mb="20px">
        Similar <span style={{ color: "#ff2625" }}>Target Muscle</span>{" "}
        Exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb="10px">
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb="20px">
        Similar <span style={{ color: "#ff2625" }}>Equipment</span> Exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb="30px">
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
