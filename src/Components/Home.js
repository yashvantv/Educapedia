import React from 'react'
import About from './About'
import Nav from './Nav'
import Courses from './Courses'
import Educators from './Educators'
import Pricing from './Pricing'
import m2 from '../Img/m2.png'
import Contact from './Contact'

const Home = () => {
  return (
    <div>

          <Nav/>

          <div class="main-img">

            <div className='container'>
              <div style={{justifyContent:'center'}} className='row'>
              <div className='col-lg-6'>
                
                <h1 class="home_write">Learn Today For A Better <br/>Tomorrow!</h1>
                <p class="home_paregraph" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.
                </p>
                <button class="home_button" type="button"> View courses</button>
                
              </div>

              <div className='col-lg-6'>
                <img style={{width:'100%'}} class="home_img2" src={m2}/>
              </div>  
              </div>

            </div>

          </div>

          <About/>

          <Courses/>

          <Educators/>

          <Pricing/>

          <Contact/>



    </div>

  )
}

export default Home