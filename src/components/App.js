
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [txt, setTxt] = useState("")

  function displayText(event) {
    setTxt(event.target.value)
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      {txt ? <p>{txt}</p> : null}
      <div className="child">
        <h2>Child Component</h2>
        <input type="text" name="" id="" onChange={displayText} />
      </div>
    </div>
  )
}

export default App
