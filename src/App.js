import React from 'react';
import './App.css';
import { backgroundImg } from './util/customStyles';

//import components
import Sakura from './components/Sakura/Sakura';
import Home from './components/Home/Home';
import NavLinks from './components/NavLinks/NavLinks';

function App() {

  return (
    <div className="App" style={backgroundImg} >
      <div className="container">
        <NavLinks />
        <Home />
      </div>
      <Sakura />
    </div>
  );
}

export default App;
