import React from 'react'
import MovieListGrid from '../components/MovieListGrid'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MovieList() {
  return (
    <div>
      <Navbar />
      <MovieListGrid class="pt-28 p-4 bg-slate-100"/>
      <Footer />
    </div>
  )
}
