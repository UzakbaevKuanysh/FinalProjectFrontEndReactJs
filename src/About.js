import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import data from './data.json';
export default function About() {
  

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(data);
  
   
    useEffect(() => {
      fetch(data)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);

         
          },
         
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
          <div class="about">
          <h4>The best doctors of our company</h4>
        <ul class="doctors">
          {items.map(item => (
            <li class="list" key={item.id}>
              <li><img height="200" width="200" src={item.image} alt = "" /></li>
              <li>{item.name}</li>
              <li>{item.major}</li>
              <li>{item.company}</li>
              <li>{item.email}</li>
              <li>{item.contact}</li>
               
            </li>
          ))}
        </ul>
       
  
        </div>
   
      );
    }
  }
 