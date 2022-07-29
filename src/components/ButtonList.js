import React from 'react';
import './bimstyle.css';


function ButtonList(props) {
    return (
      <div className='bimList'>
        <div className='buttonStyle'>
          <button onClick={props.setBim}>Калькулятор BIM</button>;
        </div> 
        <div className='bimRes' style={{color : props.getColor()}}>BIM = {props.bim}</div>
      </div>
    );
  }


export default ButtonList;


