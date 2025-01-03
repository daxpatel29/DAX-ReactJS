import React, { Component } from 'react';
import { useState } from 'react';

const Counter = () => {
  let [count, setCount]=useState(0);

  const inc = () => {
    setCount(count+1);
  };
  const dec = () => {
    setCount(count-1);
  };
  
    return (
      <div>
        <h2>COUNTER</h2><br />
        <button onClick={dec}>-</button>
        <button>{count}</button>
        <button onClick={inc}>+</button>
      </div>
    );
  }


export default Counter;
