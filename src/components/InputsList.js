import React from 'react';
import './bimstyle.css';

function InputsList(props) {
    return (
      <div className='bimList'>
        <h1>BMI Tracker</h1>
        <div className='inputsContainer'>
        <div className='input'>
          <p>Weight (in kg)</p>
          <input placeholder='50' type='number' value={props.weight} onChange={props.setWeight}></input>
        </div>
        <div className='input'>
          <p>Height (in cm)</p>
          <input placeholder='175' type='number' value={props.height} onChange={props.setHeight}></input>
          {/* <input placeholder='175' type='number' value={props.height} onChange={event => props.setHeight(event.target.value)}></input> */}
        </div>
       </div>
      </div>
    );
  }
  

export default InputsList;

