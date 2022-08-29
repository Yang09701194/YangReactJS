import "./App.css";
import React from 'react';

function App() {
  const {useState} = React;
  const [count, setCount] = useState(5);
  // const increment =()=>{setCount(count + 1)};
  // const decrement =()=>{setCount(count + 1)};
  const handleCount = (type) => {
    if(type == 'increment'){
      setCount(count + 1);
    } else if (type == 'decrement'){
      setCount(count - 1);
    }
  };

  

  return (
    <div className="container">
      {/* <div className={ `chevron chevron-up ${count >= 10 && 'visibility-hidden'}` } onClick={()=>{setCount(count + 1)}}  /> */}
      {/* <div className={ `chevron chevron-up ${count >= 10 && 'visibility-hidden'}` } onClick={(increment)}  /> */}
      <div className={ `chevron chevron-up ${count >= 10 && 'visibility-hidden'}` } onClick={()=>{handleCount('increment')}}  />
      <div className="number">{count}</div>
      {/* <div className={ `chevron chevron-down ${count <= 0 && 'visibility-hidden'}` } onClick={()=>{setCount(count - 1)}}   /> */}
      {/* <div className={ `chevron chevron-down ${count <= 0 && 'visibility-hidden'}` } onClick={decrement}   /> */}
      <div className={ `chevron chevron-down ${count <= 0 && 'visibility-hidden'}` } onClick={()=>{handleCount('decrement')}}   />
    </div>
  );
}

export default App;

// return (
//   <div className="container">
//     <div className="chevron chevron-up" onClick={()=>{setCount(count + 1)}} style={{visibility: count>=10 && 'hidden'}} />
//     <div className="number">{count}</div>
//     <div className="chevron chevron-down" onClick={()=>{setCount(count - 1)}} style={{visibility: count<=0 && 'hidden'}}  />
//   </div>
// );