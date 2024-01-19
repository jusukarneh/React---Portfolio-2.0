
import projects from '../assets/projects.json'
import Card from '../Components/Card'

import Slider from '../Components/Slider'


function Home (){
    return(
        <>
        
         

          <Slider/>
    
          
       
        <section class="team_section layout_padding">
        <div class="container">
        <div class="heading_container heading_center">
            <h2>
              My Creative Work
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
export default Home