import React, { useState } from 'react'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'

function DisplayQues({title,info}) {
    console.log(title,info, "coming from display ques")
    const [showInfo, setShowInfo]=useState(false)
  return (
    <div>
        
        <h3>{title}</h3>
        <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? <AiFillMinusSquare/> :<AiFillPlusSquare/> }</button>
        {showInfo && <p>{info}</p>}

    </div>
  )
}

export default DisplayQues