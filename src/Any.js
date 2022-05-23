import React from 'react';
import './App.css';

import person3 from './images/person3.jpg';
function Any() {
  return (
    <div className="App">
      <div class="friendsbio">
        <section>
      
      <img src={person3} alt="" width="250" height="250"/>
          <ul>
            <li>Name:Any</li>
            <li>Age:20</li>
            <li>Country:USA</li>
          </ul>
          </section>
        </div>
    </div>
  );
}

export default Any;