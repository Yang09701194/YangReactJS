import './App.css';
import React from 'react';

const UnitControl = () =>{
  return   (
  <div className="unit-control">
          <div className='unit'>Mbps</div>
          <span className='exchange-icon fa-fw  fa-stack'>
            <i className='far fa-circle fa-stack-2x'></i>
            <i className='fas fa-exchange-alt fa-stack-1x'></i>
          </span>
          <div className='unit'>MB/s</div>
        </div>
    );
};

const CardFooter = (props) =>{
  // let inputValue = 30;
  const { inputVal } = props;
  let criteria;
  
  if(!inputVal){
    criteria = {
      title: '---',
      backgroundColor: '#d3d8e2'
    };
  } else if (inputVal < 15){
    criteria = {
      title:'SLOW',
      backgroundColor: '#ee362d',
    };
  } else if (inputVal < 40)
  {
    criteria = {
      title: 'GOOD',
      backgroundColor: '#1b82f1',
    };
  } else if (inputVal >= 40)
  {
    criteria = {
      title: 'FAST',
      backgroundColor: '#13d569',
    };
  }
  // return <div className='card-footer'>FAST</div> ;
  return <div className='card-footer' style={{backgroundColor: criteria.backgroundColor}}>{criteria.title}</div> ;
}

function App() {

  const {useState} = React;
  const [inputVal, setInputVal] = useState(0);
  const handleInputChange = (e) =>{
    setInputVal(e.target.value);
  };

  return (
    <div className="container">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
      <div className='card-header'>Network Speed Coverter</div>
      <div className='card-body'>

        {/* <div className="unit-control">
          <div className='unit'>Mbps</div>
          <span className='exchange-icon fa-fw  fa-stack'>
            <i className='far fa-circle fa-stack-2x'></i>
            <i className='fas fa-exchange-alt fa-stack-1x'></i>
          </span>
          <div className='unit'>MB/s</div>
        </div> */}
        <UnitControl/>

        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input type="number" className="input-number" min="0" onChange={handleInputChange} value={inputVal}></input>
          </div>
          <span className='exchange-icon fa-fw  fa-stack'>
            <i className='fas fa-angle-right'></i>
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input type="text" className='input-number text-right' disabled value={inputVal/8}></input>
          </div>

        </div>

      </div>

      {/* <div className='card-footer'>FAST</div> */}
      <CardFooter inputVal={inputVal} />
    </div>
  );
}

export default App;
