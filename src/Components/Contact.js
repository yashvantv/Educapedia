import React from 'react'
import t2 from '../Img/L2.png'
import t3 from '../Img/facebook1.png'
import t4 from '../Img/twitter 1.png'
import t5 from '../Img/google.png'

const Contact = () => {
  return (
      <div id="Contact">
          <div>
              <div className='container'>
                  <div id='subscribe' className='col-lg-8'>
                      <div style={{ justifyContent: 'center' }} className='row'>
                          <div className='col-lg-5'>
                              <h2 className='hadding-now'>Subscribe Now!</h2>
                              <p className='paragraph-now'>Lorem ipsum dolor sit amet, consectetur adipisicing Elit.</p>
                          </div>

                          <div className='col-lg-5'>
                              <div className='all_email'>
                                  <input className="email_now" type="text" id="lname" name="lastname" placeholder="    Email" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>



          {/* ==================================footer==================================== */}

          <footer>
              <div className='footer-background'>
                  <div className='container'>
                      <div style={{ paddingTop: '100px', justifyContent: 'center' }} className='row'>

                          <div className='col-lg-2'>
                              <div className='andlogo'>
                                  <img src={t2} />
                                  <p className='footer_educapedia'>Educapedia</p>
                              </div>
                          </div>


                          <div style={{ paddingTop: '60px', textAlign: 'center' }} className='col-lg-2'>
                              <img src={t3} />
                              <img style={{ margin: '0px 10px' }} src={t4} />
                              <img src={t5} />
                          </div>
                          <div style={{ paddingTop: '60px' }} className='col-lg-6'>
                              <hr className='footer-hr' />
                              <p className='foot-copyright'>© Copyrights 2020 All rights reserved. Made with &#128151; Educapedia </p>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
  )
}

export default Contact