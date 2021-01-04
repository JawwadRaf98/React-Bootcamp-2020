import React, { useState , useContext } from 'react'
import './App.css';
import Room from './Component/Room';
import Name from './Component/Name';
import Counter1 from './Component/Counter1';
import Counter2 from './Component/Counter2';
import CounterContext from './store/context/CounterContext';

function App() {
  const counterContext = useState(useContext(CounterContext), ()=>{})
  return (
    <div className="App">
      <Room />
        <Name />

      <CounterContext.Provider value = {counterContext} >
        <Counter1 />
      </CounterContext.Provider>



      <Counter2 />
    </div>
  );
}

export default App;
