import React from "react";
import "flowbite";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridMenu from "../components/GridMenu";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <Navbar />
      <div className="hero h-screen flex w-full mx-auto">
        <Search class="mt-20 max-md:hidden" />
        <Menu class="mt-44 mx-auto"/>
      </div>
      <GridMenu />
      <Footer />
      
    </div>
  );
}
