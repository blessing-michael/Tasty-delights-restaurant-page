import React, { useState } from 'react'
import data from "./Data"
import DisplayQues from './DisplayQues'
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import Footer from './Footer';
import Follow from './Follow';

function Questions() {
    const [questions, setQuestions]= useState(data)
   
    // const []
    // const {title,info}= data[4]
    // console.log(data.length)
  return (
    <div className='container'>
          <h2 >Frequently asked
questions</h2>
<section className='info'>
{questions.map((ques)=>{
            // const {id,title, info}=ques
            // console.log(ques.title, ques.id)
          
           return <DisplayQues key={ques.id} {...ques} />

        })}

</section>
      

            {/* SET UP AS PROP OPTION */}
            {/* <h1>{title}</h1>
           
            
             <div className="btn-container">
                <button onClick={()=> setShowInfo(!showInfo)}> {showInfo?<AiFillPlusSquare/> : <AiFillMinusSquare/>}</button>
               
             </div>
           
           
             {showInfo && <p>{info}</p>} */}
            {/* </div> */}
           
          

     
      
{/* <Follow/> */}
    </div>
  )
}

export default Questions