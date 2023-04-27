import React, { useState } from 'react'
import menudata from "../MenuData"
import Main from '../Main'
import Menu from '../Menu'
import Category from '../Category'
import Reviews from '../Reviews'
import Follow from '../Follow'
import Cat from './Cat'
// import menudata from "./MenuData"

//JS UNIQUE VALUES
const allCategories= ['all', ...new Set(menudata.map((val)=> val.category))]
console.log(allCategories)

function Home() {
    const [menu, setMenu]= useState(menudata)
    // console.log(menu)
    const [categories, setCategories]= useState(allCategories)
   

  

    //filter according to category

    const filterItems = (category)=>{
      console.log(category)
      if(category=== 'all'){
        setMenu(menudata)
        return;
      }
        const newItems = menudata.filter((item)=> item.category === category)
        setMenu(newItems)
        console.log(newItems)


    }
  return (
    <div>
       {/* <h3 className='home'>home</h3> */}
      





      <Main/>
        <Category categories={categories} filterItems={filterItems}/>
        <Menu menu={menu} />
        

        <Reviews/>
        <Follow/>
        
        {/* <Questions/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default Home