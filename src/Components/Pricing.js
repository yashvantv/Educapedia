import React, {useState} from 'react'
import t1 from '../Img/touch.png'


const Pricing = () => {


  return (
    <div id="Pricing">
      <h2 className='pricing-hadding'>PRICING</h2>

      <p className='pricing-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum Est a,<br/> mattis tellus. Sed dignissim, metus nec fringilla accumsan,
      </p>


      <div className='pri-main'>
        <div className='container'>
          <div style={{paddingTop:'40px'}} className='row'>
            <div className='col-lg-4'>
              <div className='pri-card1'>
                <div className='container'>
                  <h2 className='pri-hadding'>Free</h2>
                  <h3 className='pri-price'>$<span className='zero'>0</span>/month</h3>
                  <hr className='pri-hr' />
                  <div>
                    <ul className='pri-ul1'>
                      <li><i class="fa-solid fa-circle-check"></i>  free membership</li>
                      <li><i class="fa-solid fa-circle-check"></i>  30GB storage</li>
                      <li><i class="fa-solid fa-circle-check"></i>  1 personal email</li>
                    </ul>
                    <div className='pri-btn1'>
                      <button className='buy-btn' type="button">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='pri-card1'>
                <div className='container'>
                  <h2 className='pri-hadding'>Intermediate</h2>
                  <h3 className='pri-price'>$<span className='zero'>49</span>/month</h3>
                  <hr className='pri-hr' />
                  <div>
                    <ul className='pri-ul'>
                      <li><i class="fa-solid fa-circle-check"></i>  free membership</li>
                      <li><i class="fa-solid fa-circle-check"></i>  100GB storage</li>
                      <li><i class="fa-solid fa-circle-check"></i>  2 personal email</li>
                      <li><i class="fa-solid fa-circle-check"></i>  1 FTP account</li>
                    </ul>
                    <div className='pri-btn'>
                      <button className='buy-btn' type="button">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='pri-card1'>
                <div className='container'>
                <h2 className='pri-hadding'>Professional</h2>
                <h3 className='pri-price'>$<span className='zero'>99</span>/month</h3>
                <hr className='pri-hr' />
                  <div>
                    <ul className='pri-ul'>
                      <li><i class="fa-solid fa-circle-check"></i>  free membership</li>
                      <li><i class="fa-solid fa-circle-check"></i>  100GB storage</li>
                      <li><i class="fa-solid fa-circle-check"></i>  2 personal email</li>
                      <li><i class="fa-solid fa-circle-check"></i>  1 FTP account</li>
                    </ul>
                    <div className='pri-btn'>
                      <button className='buy-btn' type="button">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>






      {/* ===========================================Get IN TOUCH======================================== */}

      <h2 className='get-hadding'>GET IN TOUCH</h2>

      <p className='get-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum Est a,<br/> mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <img style={{ marginTop: '-55px', width: '100%' }} src={t1} />
          </div>


          <div className='col-lg-6'>

            <input className="form-Name" type="text" id="fname" name="name" 
             placeholder="    Name" />


            <input style={{ marginTop: '20px' }} className="form-Name" type="text" id="lname" name="name" 
            placeholder="    Email" />


            <input style={{ marginTop: '20px' }} className="form-Name" type="text" id="lname" name="phone"
            placeholder="    Phone" />

            <textarea class="form-message" rows="" cols="" name="comment" 
            placeholder="    Message" form="usrform"></textarea>

            <button className='send-btn' type="submit">Send Message</button>
          </div>
        </div>
      </div>

      


    </div>
  )
}

export default Pricing