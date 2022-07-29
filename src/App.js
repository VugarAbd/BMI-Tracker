import React, { useState } from 'react';
import "./components/bimstyle.css";
import InputsList from './components/InputsList';
import ButtonList from './components/ButtonList';




function App() {
  let [height, setHeight] = useState('');
  let [weight, setWeight] = useState('');
  let [bim, setBim] = useState('');
  console.log(height)
  console.log(weight)

  function handleClick () {
    const heightInMetr = height / 100;
    const res = weight / (heightInMetr * heightInMetr);

    setBim(res.toFixed(1));
  }

  function getColor() {
    if (bim <= 20) {
      return 'green';
    }
    if (bim > 20 && bim <= 33){
      return 'yellow';
    }
    if (bim > 33 ){
      return 'red';
    }
  }

  return (
    <div className="App">
      <div className='bimList'>
        <InputsList height={height} weight={weight} setHeight={(event) => setHeight(event.target.value)} setWeight={(event) => setWeight(event.target.value)} />
        <ButtonList bim={bim} setBim={handleClick} getColor={getColor}/>
      </div>
    </div>
  );  
};

export default App;
