import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import MovieCard from "../../components/MovieCard/MovieCard";
import useFetch from "../../useFetch";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "./Home.css";

const Home = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const popularMovies = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc`
  );
  const trendMovies = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=es-ES`
  );

  const upcomingMovies = useFetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-ES'`
  );

  return (
    <main className="home">
      <section className="tendencias">
        <h2>Tendencias</h2>
        <Slider movies={trendMovies} />
      </section>
      <section className="tendencias">
        <h2>Más populares</h2>
        <Slider movies={popularMovies} />
      </section>
      <section className="tendencias">
        <h2>Proximamente</h2>
        <Slider movies={upcomingMovies} />
      </section>
    </main>
  );
};

export default Home;
