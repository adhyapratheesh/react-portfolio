import React from 'react'
import Nav from '../components/Nav'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
