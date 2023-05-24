import React, { useEffect, useState } from "react";
import "flowbite";
import { getMovie, searchMovie } from "../apis/api";
import Card from "./Card";
import Search from "./Search";

export default function GridMenu(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie().then((result) => {
      setMovies(result);
    });
  }, []);

  console.log(movies)
  const ListMovie = () => {
    return movies.map((movie, i) => {
      return (
        <div key={i}>
          <Card
            judul={movie.title}
            rate={movie.vote_average}
            desc={movie.overview}
            image={`${import.meta.env.VITE_BASE_IMG_URL}/${movie.poster_path}`}
          />
        </div>
      );
    });
  };

  const searchQuery = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovies(query.results);
    }
  };

  return (
    <div className={props.className}>
      {/* search */}
      <div className={props.search}>
        <Search query={({ target }) => searchQuery(target.value)} class={"p-1 mt-4 mx-auto w-[60%]"}/>
      </div>
      {/* menu */}
      <div className="mx-4 mb-2">
        <div className={props.button}>
        <div className="flex flex-wrap items-center justify-center py-4 md:py-8">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            All categories
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Action
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Anime
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Comedy
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Horror
          </button>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ListMovie />
        </div>
      </div>
    </div>
  );
}
