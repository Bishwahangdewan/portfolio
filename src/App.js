import React from 'react';
import './App.css';
import { backgroundImg } from './util/customStyles';

import Sakura from './components/Sakura/Sakura';

function App() {

  return (
    <div className="App" style={backgroundImg} >
      <Sakura />
    </div>
  );
}

export default App;
