import React from 'react'
import e1 from '../Img/Carousel1.png'
import e5 from '../Img/Carousel2.png'
import e2 from '../Img/twitter.png'
import e3 from '../Img/facebook.png'
import e4 from '../Img/link.png'

const Educators = () => {
  return (
    <div id="Educators">

      <div>
        <h2 className='expert-hadding'>OUR EXPERT EDUCATORS</h2>
        <p className='expert-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum Est a,<br /> mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
      </div>


      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div className='container'>
                <div style={{ paddingTop: '100px', justifyContent:'center' }} className='row'>


                  <div className='col-lg-3'>
                    <div>
                      <div id='card-caro' class="card" style={{width: '100%'}}>
                        <img src={e1} />
                        <div class="card-body">
                          <div className='box-laravel'>
                            <h2 className='hadding-laravel'>laravel instructor</h2>
                          </div>
                          <h4 class="card-text">KINEM JONES</h4>
                          <div className='three-image'>
                            <img className='twitter' src={e2} />
                            <img src={e3} />
                            <img className='link' src={e4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div class="carousel-item">
          <div className='container'>
                <div style={{ paddingTop: '100px',justifyContent:'center' }} className='row'>

                  <div className='col-lg-3'>
                    <div>
                      <div id='card-caro' class="card" style={{width:'100%'}}>
                        <img src={e5} />
                        <div class="card-body">
                          <div className='box-laravel'>
                            <h2 className='hadding-laravel'>flutter instructor</h2>
                          </div>
                          <h4 class="card-text">KINEM JONES</h4>
                          <div className='three-image'>
                            <img className='twitter' src={e2} />
                            <img src={e3} />
                            <img className='link' src={e4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
          </div>
          <div class="carousel-item">
          <div className='container'>
                <div style={{ paddingTop: '100px', justifyContent:'center' }} className='row'>


                  <div className='col-lg-3'>
                    <div>
                      <div id='card-caro' class="card" style={{width: '100%'}}>
                        <img src={e1} />
                        <div class="card-body">
                          <div className='box-laravel'>
                            <h2 className='hadding-laravel'>laravel instructor</h2>
                          </div>
                          <h4 class="card-text">KINEM JONES</h4>
                          <div className='three-image'>
                            <img className='twitter' src={e2} />
                            <img src={e3} />
                            <img className='link' src={e4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div class="carousel-item">
          <div className='container'>
                <div style={{ paddingTop: '100px',justifyContent:'center' }} className='row'>

                  <div className='col-lg-3'>
                    <div>
                      <div id='card-caro' class="card" style={{width:'100%'}}>
                        <img src={e5} />
                        <div class="card-body">
                          <div className='box-laravel'>
                            <h2 className='hadding-laravel'>flutter instructor</h2>
                          </div>
                          <h4 class="card-text">KINEM JONES</h4>
                          <div className='three-image'>
                            <img className='twitter' src={e2} />
                            <img src={e3} />
                            <img className='link' src={e4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>






    </div>
  )
}

export default Educators