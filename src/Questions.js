import React, { useState } from 'react'
import data from "./Data"
import DisplayQues from './DisplayQues'
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";

function Questions() {
    const [questions, setQuestions]= useState(data)
   
    // const []
    // const {title,info}= data[4]
    // console.log(data.length)
  return (
    <div>
        {questions.map((ques)=>{
            // const {id,title, info}=ques
            // console.log(ques.title, ques.id)
          
           return <DisplayQues key={ques.id} {...ques} />

        })}

            {/* SET UP AS PROP OPTION */}
            {/* <h1>{title}</h1>
           
            
             <div className="btn-container">
                <button onClick={()=> setShowInfo(!showInfo)}> {showInfo?<AiFillPlusSquare/> : <AiFillMinusSquare/>}</button>
               
             </div>
           
           
             {showInfo && <p>{info}</p>} */}
            {/* </div> */}
           
          

     
      

    </div>
  )
}

export default Questions