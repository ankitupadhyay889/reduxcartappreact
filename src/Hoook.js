import React, { useRef,useEffect, useState } from "react";


export default function App() {

  const counter = useRef(0);
  const [number,setNumber] = useState(0)


  useEffect(() => {
    counter.current = counter.current + 1;
  })

  const update = () => {
    setNumber(number + 1)
  }


  return (
    <div>
      <h1>{`The component has been re-rendered ${counter.current} times`}</h1>
      <button onClick={update}>Increase Number</button>
      {number}
      </div>
  )
}