import React from 'react';
import Header from './components/Header';
import ModelPage from './components/ModelPage';
import Section from './components/Section';
import{Routes,Route} from'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Section/>}/>
        <Route exact path='/ModelPage/:title' element={<ModelPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
