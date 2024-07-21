import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
