import React from 'react'
import CardPrice from '../components/CardPrice'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Price() {
  return (
    <div>
      <Navbar />
      <CardPrice className="flex justify-center p-2 pb-8 bg-red-700 pt-28"/>
      <Footer/>
    </div>
  )
}
