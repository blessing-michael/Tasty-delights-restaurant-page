import React, { useState } from 'react'
import Questions from './Questions'
import menudata from "./MenuData"
import Menu from './Menu'
import Category from './Category'
import Main from './Main'
import Nav from './Nav'
import Reviews from './Reviews'
import Follow from './Follow'
import Footer from './Footer'


//JS UNIQUE VALUES
const allCategories= ['all', ...new Set(menudata.map((val)=> val.category))]
console.log(allCategories)

function App() {
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
      <Nav/>
      <Main/>
        <Category categories={categories} filterItems={filterItems}/>
        <Menu menu={menu} />

        <Reviews/>
        <Follow/>
        
        <Questions/>
        <Footer/>
    </div>
  )
}

export default App