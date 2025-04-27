import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Topbar from './component/TopBar'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
function App() {
  

  return (
   <>
   <Topbar />
      <Navbar />
      <HeroSection />
      <Footer></Footer>
   </>
  )
}

export default App
