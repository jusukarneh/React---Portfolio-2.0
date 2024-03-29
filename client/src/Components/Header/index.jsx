function Header() {
  return (
    <>
      <header class="header_section">
        <div class="header_top">
          <div class="container-fluid">
            <div class="contact_link-container">
              <a href="" class="contact_link1">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  RESUME
                </span>
              </a>
              <a href="" class="contact_link2">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call : 678-779-7350
                </span>
              </a>
              <a href="" class="contact_link3">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  jusudaddi@yahoo.com

                </span>

              </a>
            </div>
            <div class="social_box">

              <a href="https://www.linkedin.com/in/jusu-karneh-3179b669/" target="_blank" >

                <i class="fa fa-linkedin" aria-hidden="true"> </i>
              </a>

              <a href="https://github.com/jusukarneh" target="_blank" >
                

                <i class="fa fa-github" aria-hidden="true"></i>
              </a>

            </div>
          </div>
        </div>
        <div class="header_bottom">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container">
              <a class="navbar-brand" href="index.html">
                <span>
                  Frontend developer
                </span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""></span>
              </button>

              <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about"> About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/portfolio"> Portfolio </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header