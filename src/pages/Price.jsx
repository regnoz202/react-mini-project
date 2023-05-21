import React from 'react'
import CardPrice from '../components/CardPrice'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Price() {
  return (
    <div>
      <Navbar />
      <CardPrice className="flex p-2 justify-center pt-28 pb-8 bg-red-700"/>
      <Footer/>
    </div>
  )
}
