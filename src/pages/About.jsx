import React from 'react'
import "flowbite";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutDescription from '../components/AboutDescription';

export default function About() {
  return (
    <div className="bg-slate-100">
        <Navbar />
        <AboutDescription />
        <Footer />
    </div>
  )
}
