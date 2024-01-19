import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom';
import Header from './Components/Header'
import Hero from './Components/Hero'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="hero_area">
    <Hero />
  <Header />
   <Outlet/> 
   </div>
  )
}

export default App
