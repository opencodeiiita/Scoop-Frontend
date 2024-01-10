import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Carousell from "../components/Carousell";
import PopularPost from "../components/PopularPost";
import { Box } from "@mui/material";
import LatestNews from "../components/LatestNews";
import CategoryCarousel from "../components/CategoryCarousel";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "black", width: "100vw" }}>
     <Navbar></Navbar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <CategoryCarousel />
      <Carousell />
      <PopularPost></PopularPost>
      <LatestNews />
    </Box>
  );
};

export default Home;
