import React, { useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";

function DisplayQues({ title, info }) {
  // console.log(title,info, "coming from display ques")
  const [showInfo, setShowInfo] = useState(false);

  const HandleChange=()=>{
    console.log("clicked")


  }
  return (
    <article className="question">
      <header onClick={HandleChange}>
        <h3 >{title}</h3>
        <button> clicked</button>
        {/* <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiFillMinusSquare /> : <AiFillPlusSquare />}
        </button> */}
        {/* {showInfo && <p>{info}</p>} */}
      </header>
      {/* {showInfo && <p>{info}</p>}  */}
    </article>

    // </section>
  );
}

export default DisplayQues;
