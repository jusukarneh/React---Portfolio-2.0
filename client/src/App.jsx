import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './Components/Header'
import Hero from './Components/Hero'
import projects from './assets/projects.json'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="hero_area">
      <Hero />
      <Header />
      <section class=" slider_section ">
        </section>
    </div>
    <section class="team_section layout_padding">
    <div class="container">
    <div class="heading_container heading_center">
        <h2>
          Our Guards
        </h2>
        <p>
          Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris
          iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
        </p>
      </div>
      <div class="row">
        {projects.map(project => {
          return <>
            <Card project={project} />
          </>
        })}
      </div>
    </div>
    </section>
    </>
  )
}

export default App
