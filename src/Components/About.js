import React from 'react'
import c1 from '../Img/C1.png'
import c2 from '../Img/c2.png'
import v1 from '../Img/v1.png'
import v2 from '../Img/v2.png'
import v3 from '../Img/v3.png'
import v4 from '../Img/v4.png'
import v5 from '../Img/v5.png'
import v6 from '../Img/why1.png'
import v8 from '../Img/e1.png'
import v9 from '../Img/e2.png'
import v10 from '../Img/e3.png'
import v11 from '../Img/e4.png'
import v12 from '../Img/e5.png'
import v13 from '../Img/e6.png'


const About = () => {
  return (
    <div id="About">
      <h2 className='about_hadding'>ABOUT US</h2>

      <div className='container'>
        <div style={{justifyContent:'center'}} className='row'>
          <div className='col-lg-5'>
            <div className='hadding_paregraph'>
            <p className="about-paregraph1">EXPLORE THE WIDE RANGE OF OPTIONS</p>
            <h2 className="about-hadi">The Best Course Design For You Crafted By Professionals</h2>
            <p className="about_paregraph2">Lorem ipsum dolor sit amet, consectetur adipiscing Elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed  dignissim, metus nec fringilla accumsan, risus sem  sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.
            </p>
            </div>
          </div>

          <div className='col-lg-6'>
            <div style={{justifyContent:'center'}} className='row'>

              <div className='col-lg-5'>
                <div id='card-page' class="card">
                  <img src={c1} />

                  <div className="card-body">
                    <h5 className="card-hadding" >Interactive Learning</h5>
                    <p className="About-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-5'>
                <div id='card-page' class="card">
                  <img src={c2} />

                  <div className="card-body">
                    <h5 className="card-hadding" >Exclusive Support</h5>
                    <p className="About-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>

      {/* ======================================HOW WE WORK==================================== */}

      <div class="work-back">
        <div class="work-paddi">
        <h2 class="work-hadding">HOW WE WORK</h2>
        <p class="work-hadding1">SIMPLE & EFFICIENT</p>
        </div>
      
      <div className='container'>
        <div className='main_grid'>
          <div class="grid-card1">
            <img class="gridcard-img2" src={v1}/>
            <hr class="card-hr"/>
            <h2 class="card-write">plan</h2>
            <p class="card-write1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio 
              mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..
            </p>
          </div>
          {/* <div class="grid-card1">
            <img class="gridcard-img1" src={v1}/>
            <hr class="card-hr"/>
            <h2 class="card-write">plan</h2>
            <p class="card-write1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio 
              mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..
            </p>
          </div> */}

          <div class="grid-card1">
            <img class="gridcard-img1" src={v2}/>
            <hr class="card-hr"/>
            <h2 class="card-write">Study</h2>
            <p class="card-write1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio 
              mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..
            </p>
          </div>

          <div class="grid-card1">
          <img class="gridcard-img1" src={v3}/>
            <hr class="card-hr"/>
            <h2 class="card-write">Experiment</h2>
            <p class="card-write1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio 
              mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..
            </p>
          </div>

          <div class="grid-card1">
          <img class="gridcard-img1" src={v4}/>
            <hr class="card-hr"/>
            <h2 class="card-write">Score</h2>
            <p class="card-write1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio 
              mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..
            </p>
          </div>

          <div class="grid-card1">
          <img class="gridcard-img1" src={v5}/>
            <hr class="card-hr"/>
            <h2 class="card-write">Get Cerified</h2>
            <p class="card-write1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio 
              mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..
            </p>
          </div>
        
        </div>
      </div>
      </div>


      {/* ==========================================WHY CHOOSE US========================================= */}


      <h2 className='why-had'>WHY CHOOSE US</h2>

      <div style={{paddingLeft:'none'}} className="container">
        <div className="row">
          <div className='col-lg-6'>
           <img style={{marginTop:'40px',width:'100%'}}src={v6}/>
          </div>


          
          <div style={{padding:'0 0px',justifyContent:'center'}} className='col-lg-5'>
            
              <div className="choose_all">
                <img src={v8}/>
                <div className="row">

                 <h2 className='why_hands'>Hands-On Skilling</h2>
                 <p className='why_paragraph'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum doloradipiscing elit Lorem ipsum. </p>

                </div>
              </div>


              <div className="choose_all1">
                <div className="row">

                 <h2 className='why_hands1'>Supportive educators</h2>
                 <p className='why_paragraph1'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum doloradipiscing elit Lorem ipsum.  </p>

                </div>
                <img src={v9}/>
              </div>

              <div style={{marginTop:'120px'}} className="choose_all">
                <img src={v10}/>
                <div className="row">

                <h2 className='why_hands'>Community-driven Learning</h2>
                <p className='why_paragraph'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum doloradipiscing elit Lorem ipsum. </p>

                </div>
              </div>

              <div className="choose_all1">
                <div className="row">

                <h2 className='why_hands1'>Job-ready Portfolio</h2>
                <p className='why_paragraph1'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum doloradipiscing elit Lorem ipsum.  </p>

                </div>
                <img src={v11}/>
              </div>

              <div style={{marginTop:'120px'}} className="choose_all">
                <img src={v12}/>
                <div className="row">

                 <h2 className='why_hands'>Strong Communicators</h2>
                 <p className='why_paragraph'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum doloradipiscing elit Lorem ipsum. </p>

                </div>
              </div>

              <div className="choose_all1">
                <div className="row">

                <h2 className='why_hands1'>certificates</h2>
                <p className='why_paragraph1'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum doloradipiscing elit Lorem ipsum.  </p>

                </div>
                <img src={v13}/>
              </div>

          </div>
        </div>
      </div>





    </div>
  )
}

export default About