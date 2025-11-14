import React, { useState } from 'react'
import './Counter.css'

function Counter() {

    const[Counter,setCounter]=useState(0)

  return (
    <div>
      You have clicked the button {Counter} times.
      <button onClick={()=>{setCounter(Counter+1)}}>Click Me</button>
      <button onClick={()=>{setCounter(0)}}>Reset</button>
    </div>
  )
}

export default Counter
