import React from 'react';
import './App.css';
import { backgroundImg } from './util/customStyles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components
import Sakura from './components/Sakura/Sakura';
import Home from './components/Home/Home';
import NavLinks from './components/NavLinks/NavLinks';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <div className="App" style={backgroundImg} >
      <div className="container">
        <BrowserRouter>
          <NavLinks />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Sakura />
    </div>
  );
}

export default App;
