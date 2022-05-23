import React from 'react';
import './App.css';
import person4 from './images/person4.jpg';
function Alex() {

  return (
    <div className="App">
      <div class="friendsbio">
          
      <img src={person4} alt="" width="250" height="250"/>
          <ul>
            <li>Name:Alex</li>
            <li>Age:20</li>
            <li>Country:USA</li>
          </ul>
        </div>
    </div>
  );
}

export default Alex;