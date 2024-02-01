function Card (props){
    return (
        <>
        <div class="col-md-4 col-sm-6 mx-auto ">
          <div class="box">
            <div class="img-box">
              <img src={props.project.image} alt=""/>
            </div>
            <div class="detail-box">
              <h5>
                {props.project.name}
              </h5>
              <h6 class="">
                {props.project.title}
              </h6>
            </div>
          </div>
        </div>
        </>
    )
}
export default Card
