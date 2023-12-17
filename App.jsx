/* eslint-disable no-unused-vars */
import React from 'react';  
import MyApp from './MyApp.jsx'; 
import './App.css';
import { puppyList } from './data.js';

function App() {

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      <MyApp /> {/* Using MyApp component */}
    </div>
  );
}

export default App;
