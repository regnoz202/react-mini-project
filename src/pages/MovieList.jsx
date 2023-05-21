import React from "react";
import MovieListGrid from "../components/MovieListGrid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GridMenu from "../components/GridMenu";

export default function MovieList() {
  return (
    <div>
      <Navbar />
      <GridMenu
        className="pt-28 bg-slate-100"
        search="hidden"
        button="hidden"
      />
      <Footer />
    </div>
  );
}
