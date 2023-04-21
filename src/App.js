import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Questions from './Questions'
// import menudata from "./MenuData"
// import Menu from './Menu'
// import Category from './Category'
// import Main from './Main'
import Nav from './Nav'
import Reviews from './Reviews'
import Follow from './Follow'
import Footer from './Footer'
import Home from './pages/Home'
import Cat from './pages/Cat'
import Faq from './Faq'
import Support from './Support'



//JS UNIQUE VALUES
// const allCategories= ['all', ...new Set(menudata.map((val)=> val.category))]
// console.log(allCategories)

function App() {
//     const [menu, setMenu]= useState(menudata)
//     // console.log(menu)
//     const [categories, setCategories]= useState(allCategories)
   

  

    //filter according to category

    // const filterItems = (category)=>{
    //   console.log(category)
    //   if(category=== 'all'){
    //     setMenu(menudata)
    //     return;
    //   }
    //     const newItems = menudata.filter((item)=> item.category === category)
    //     setMenu(newItems)
    //     console.log(newItems)


    // }
  return (
    <div>
      <Router>
      <Nav/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cat" element={<Cat/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/support" element={<Support/>}/>
        </Routes>

        <Footer/>
      </Router>





      {/* <Main/> */}
        {/* <Category categories={categories} filterItems={filterItems}/>
        <Menu menu={menu} /> */}

        {/* <Reviews/> */}
        {/* <Follow/> */}
        
        {/* <Questions/> */}
       
    </div>
  )
}

export default App