import React from 'react';
import './Assets/DisplayWeather.css';


const api = {
  apiKey: 123
}

const onSearch = () =>{

}

const DisplayWeather = () => {
  return (
    <div className='Weather-container'>
       <div className='Weather-details'>
        <div className='city'>
        Chennai
        </div>
        <div className='Temperature'> 48 <sup>0</sup> C</div>
        <div>
          Wind Speed 59 Km/hr
        </div>
        <div>
          Pressure
        </div>
        <div>
          Saturation
        </div>
        <div>
          
        </div>
       </div>
    </div>
  )
}

export default DisplayWeather
