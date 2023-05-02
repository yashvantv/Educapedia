import logo from './logo.svg';
import './App.css';
import React, {Components} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home'
import About from './Components/About'
import Courses from './Components/Courses'
import Educators from './Components/Educators';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/About' element={<About/>} ></Route>
           <Route path='/Courses' element={<Courses/>}></Route>
           <Route path='/Educators' element={<Educators/>}></Route>
           <Route path='/Pricing' element={<Pricing/>}></Route>

           
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
