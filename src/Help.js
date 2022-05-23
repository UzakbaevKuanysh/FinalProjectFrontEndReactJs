import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {who,why,can,what,where,are} from './actions';

function Help() {
    const ask = useSelector (state => state.ask);
    const isLogged = useSelector (state => state.isLogged);
    const dispatch = useDispatch ();
  return (
    <div className="App">
      <div class ="askpage">
     
        <h1 id="ask"> {ask}</h1>
        <div class = "buttons">
        <button class = "btn-help" onClick = {() => dispatch(who())}>Who is eligible to participate? </button>
        <button class = "btn-help"  onClick = {() => dispatch(why())}>Why would a physician come to this center?</button>
        <button class = "btn-help"  onClick = {() => dispatch(can())}>Once seen, can a physician return to the program?</button>
        <button class = "btn-help"  onClick = {() => dispatch(what())}>What does the program cost?</button>
        <button class = "btn-help"  onClick = {() => dispatch(where())}>Where is the program located?</button>
        <button class = "btn-help"  onClick = {() => dispatch(are())}>Are physicians from Mayo Clinic allowed to participate in the Physician Health Center?</button>
        </div>
          
          
          
            </div>
    </div>
  );
}

export default Help;


