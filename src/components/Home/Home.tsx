import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import BookMark from './BookMark/BookMark'

const Home = () => {
  return (
    <div className='overflow-hidden h-[10000px]'>
      <Hero/>
      <About/>
      <BookMark/>
    </div>
  )
}

export default Home
