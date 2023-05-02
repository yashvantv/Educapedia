import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import l1 from '../Img/L1.png'

const Nav = () => {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg ">
        <div class="container">

          <div>
            <img style={{ marginLeft: '20px' }} src={l1} />
            <h5 style={{ marginLeft: '0px' }}>Educapedia</h5>
          </div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul style={{ margin: 'auto' }} class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#About"><b>About Us</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#Courses"><b>Courses</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#Educators"><b>Educators</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#Pricing"><b>Pricing</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="" ><b>Contact us</b></a>
              </li>

            </ul>
          </div>
        </div>
      </nav> */}


      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <div>
            <img style={{ height: '74px', width: '74px' }} src={l1} />
            <h6 style={{ marginLeft: '-10px' }}>Educapedia</h6>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#About"><b>About Us</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#Courses"><b>Courses</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#Educators"><b>Educators</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#Pricing"><b>Pricing</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#Contact" ><b>Contact us</b></a>
              </li>

              {/* <li class="nav-item">
          <a class="nav active" href="/Cart" ><h4 style={{marginTop:'0px',marginLeft:'100px',color:'black'}}><AiOutlineShoppingCart/></h4> 
          </a>
        </li> */}

            </ul>

          </div>
        </div>
      </nav>


    </div>
  )
}

export default Nav