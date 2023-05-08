import React, {useState} from 'react'

function ColorToggle() {
    const [bgColor,setbgColor]=useState(true);
    function ChangeColor (){
       setbgColor(!bgColor)
    }
  return (
    <>
    <div style={{width:"100px", height:"100px", backgroundColor: bgColor ? "gray" : "yellow"}}></div>
    <button onClick={ChangeColor}>click</button>
    </>
  )
}

export default ColorToggle