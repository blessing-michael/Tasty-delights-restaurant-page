import React, { useState } from 'react'

import reviews from './RevData'
import {GrFormNext, GrFormPrevious } from "react-icons/gr";

function Reviews() {
    const [index, setIndex]= useState(1)
  const {id,img,name, text}= reviews[index]
  console.log(reviews, index)

  const checkNum=(num)=>{
    if(num>reviews.length-1){
        return 0;
    }
    if(num<0){
        return reviews.length-1
    }
    return num

  }

  const Showprev = ()=>{
    console.log("clicking me")
    setIndex(()=>{
        let newIndex= index-1;
        return checkNum(newIndex)
    })
  }
  const Shownext = ()=>{
    console.log("clicking me")
    setIndex(()=>{
        let newIndex= index+1;
        return checkNum(newIndex)
    })
  }

  return (
    <article className='rev-article'key={id}>
        <h4 className='rev-words'>Words on the street</h4>
        <div className="rev-container">

        <div className="img-reviews">
            <img src={img} alt={text} className="image-reviews"/>
        </div>
        <div className="reviews-info">
            <h4 style={{textTransform:"capitalize", marginBottom:"10px"}}>{name}</h4>
            <p className='rev-text'>{text}</p>
        </div>
        <div className="rev-btnContainer">
            <button className='rev-button' onClick={Showprev}><GrFormPrevious/></button>
            <button className='rev-button' onClick={Shownext}><GrFormNext/></button>
        </div>

        </div>
       
    </article>
  )
}

export default Reviews