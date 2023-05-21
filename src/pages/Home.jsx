import React, { useEffect, useState } from "react";
import "flowbite";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridMenu from "../components/GridMenu";
import Card from "../components/Card";
import { searchMovie, getMovie } from "../apis/api";

export default function Home() {
  
  return (
    <div className="bg-slate-200">
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <Navbar />
      <div className="flex w-full h-screen mx-auto hero">
        <Menu className="mx-auto mt-44"/>
      </div>
      <GridMenu />
      <Footer />
      </div>
  );
}
