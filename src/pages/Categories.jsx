import React from "react";
import "flowbite";
import Navbar from "../components/Navbar";
import GridMenu from "../components/GridMenu";
import Footer from "../components/Footer";
import Search from "../components/Search";

export default function Categories() {
  return (
    <div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <Navbar />
      <GridMenu className="pt-28 bg-slate-100"/>
      <Footer />
    </div>
  );
}
