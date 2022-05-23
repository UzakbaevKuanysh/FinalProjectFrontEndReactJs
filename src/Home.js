import React from 'react';
import './App.css';
import mayoclinic from './images/mayoclinic.jpg';

export default function Home()  {
  
    
      
    return (
      <div>
     
      
    
  

        <h1 id="profile">MayoClinic</h1>
        
        <img class="mayoclinic" src={mayoclinic}alt="" width="450" height="550"/>
        <p id="mayo">The Mayo Clinic (/ˈmeɪjoʊ/) is a nonprofit American academic medical center focused on integrated health care, education, and research.
        [6] It employs over 4,500 physicians and scientists, along with another 58,400 administrative and allied health staff, 
        across three major campuses: Rochester, Minnesota; Jacksonville, 
        Florida; and Phoenix/Scottsdale, Arizona.[7][8] The practice specializes in treating 
        difficult cases through tertiary care and destination medicine. It is home to the top-15 
        ranked Mayo Clinic Alix School of Medicine in addition to many of the highest regarded residency education programs in the United States.[9][10][11] It spends over $660 million a year on research and has more than 3,000 full-time research personnel.</p>
        <div class="info">
        <div class="contact"><h2 >Contact:+77009009999</h2>
        <h2>Office center : USA, Rochester, Minnesota</h2>
        <a href = "https://www.mayoclinic.org/about-mayo-clinic">Our website</a></div>
      </div></div>
    );
  

}
