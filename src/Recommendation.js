import React from 'react';
import './App.css';


import Grip from './images/Grip.jpg';
import Zub from './images/Zub.jpg';
import { useState } from 'react';

  export default function Recommendation() {
    
    const[initialState,setInitialState]=useState({
        image:Grip,
        name1:'How to Avoid From Flu',
        a1:"Stay home and get plenty of rest.",
        a2:" Drink plenty of fluids.",
        a3:"Treat aches and fever.",
        a4:"Take care of your cough.",
        a5:" Sit in a steamy bathroom."
    })
   

    
   
   
    
   
  
            

    
    const randompeople=[
        {
          image:Grip,
          name1:'How to Avoid From Flu',
          a1:"Stay home and get plenty of rest.",
        a2:" Drink plenty of fluids.",
        a3:"Treat aches and fever.",
        a4:"Take care of your cough.",
        a5:" Sit in a steamy bathroom."
          
        },
        {
          image:Zub,
          name1:'How To Prevent Toothache',
           a1:"   Brush twice daily. Brushing is the most important thing a person can do when it comes to keeping the mouth healthy.",
        a2:" Flossing daily. Flossing serves the same purpose as brushing.",
        a3:"Limit sugary foods and drinks. ",
        a4:"Drink lots of water. ",
        a5:" Visit a dentist twice a year."
        

        },
       
      ]
    
  
    function clicked(){
        let show = randompeople[Math.floor(Math.random() * randompeople.length)];
        if (initialState !==setInitialState)
            setInitialState(() =>({
                image:show.image,
                name1:show.name1,
                a1:show.a1,
                a2:show.a2,
                a3:show.a3,
                a4:show.a4,
                a5:show.a5
           
        }));
      }
    
 
        return (
         
         
            <div className="App">
               <div class="recom">
                <h1 id="titlerec"> {initialState.name1} </h1>
                <div class="wrapper">
                <img class="medik" src={initialState.image} alt="" width="400" height="500"/>
                <ul class ="rec">
                  
                        <li> {initialState.a1}</li>
                        <li> {initialState.a2}</li>
                        <li> {initialState.a3}</li>
                        <li> {initialState.a4}</li>
                        <li> {initialState.a5}</li>
                        </ul>
                        </div>
                    <button class = "btn-rec" onClick={clicked}>Next</button>
                    
                    
                </div></div>
            
            
        );

}

