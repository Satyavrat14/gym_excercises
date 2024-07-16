import "./App.css";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./Pages/home/home";
import ExcerciseDetail from "./Pages/exercisesDetail/exercisesDetail";
import "./App.css";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excercies/:id" element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
