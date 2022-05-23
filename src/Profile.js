import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import person1 from './images/person1.jpg';

function Profile(props) {
  return (
    <div className="App">
        <div class="profilephoto">
        <h1 id="profile">My Profile </h1>
        
        <div class="profilepage">
        <img class="image" src={person1} alt="" width="250" height="250"/>
          <ul>
            <li>Name:{props.name}</li>
            <li>Age:20</li>
            <li>Country:Mexico</li>
          </ul>
        </div>
        </div>
    </div>
  );
}

export default Profile;
const element = <Profile name="Sara" />;
ReactDOM.render(element, document.getElementById('root'));