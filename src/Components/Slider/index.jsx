function Slider (){
    return(
        <section class=" slider_section ">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <h1>
                        DO <br/>
                        <span>
                          MORE
                        </span>
                      </h1>
                      <p>
                      GREAT THINGS ARE DONE BY A SERIES OF SMALL THINGS BROUGHT TOGETHER!!!!!!!!!
                      </p>
                      <div class="btn-box">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="container">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <h1>
                        DO SOMETHING  <br/>
                        <span>
                          GREAT
                        </span>
                      </h1>
                      <p>
                      GREAT THINGS ARE DONE BY A SERIES OF SMALL THINGS BROUGHT TOGETHER!!!!!!!!!
                      </p>
                      <div class="btn-box">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="container">
                <div class="row">
                  <div class="col-md-7">
                    <div class="detail-box">
                      <h1>
                        EVERYDAY <br/>
                        <span>
                          
                        </span>
                      </h1>
                      <p>
                        GREAT THINGS ARE DONE BY A SERIES OF SMALL THINGS BROUGHT TOGETHER!!!!!!!!!
                      </p>
                      <div class="btn-box">
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container idicator_container">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    )
}
export default Slider