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
import Basket from './Basket'



//JS UNIQUE VALUES
// const allCategories= ['all', ...new Set(menudata.map((val)=> val.category))]
// console.log(allCategories)

function App() {
  // bastet function

  const [cartItems, setCartItems]= useState([])

  const onRemove=(product)=>{
    console.log("removed")
    const exist = cartItems.find((x)=> x.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id))
    }
    else{
      setCartItems(cartItems.map((x)=> x.id === product.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }
  

  const onAdd= (product)=>{
    console.log("add clicked")
    const exist = cartItems.find((x)=> x.id === product.id)
    if(exist){
      setCartItems(cartItems.map((x)=> x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}])
    }
    
  }


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
      <Nav countcartItems={cartItems.length}/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cat" element={<Cat onAdd={onAdd} onRemove={onRemove}/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/cart" element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}/>
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