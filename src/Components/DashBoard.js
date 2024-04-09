import React from "react";
 import './Assets/DashBoard.css';



 export const DashBoard = () => {
   return (
     <div>
        <div className="dash_container">
            <div className="city-cont">
                
                <h2 className="dis">Weather History</h2>
            <ul className="city-list">
                <li>{localStorage.getItem('city')}</li>
            </ul>
            </div>
        
        </div>
        
    </div>
   )
 }
 