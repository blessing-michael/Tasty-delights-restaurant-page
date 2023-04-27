import React, { useState } from 'react'
import { CgProfile} from "react-icons/cg";
import { HiBars4} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Nav(props) {
    const {countcartItems}= props
    const [showNav, setShowNav]= useState(false)
    const navigate= useNavigate()

    
    const navcat= ()=>{
        navigate("/menu")
        setShowNav(false)
    
    }
    const navhome= ()=>{
        navigate("/")
        setShowNav(false)
    }
    const navfaq= ()=>{
        navigate("/faq")
        setShowNav(false)
    }
    const navsupport= ()=>{
        navigate("/support")
        setShowNav(false)
    }
    const navcart= ()=>{
        navigate("/cart")
        setShowNav(false)
    }

    const Shownavbar=()=>{
        setShowNav(!showNav)
        console.log("clicked nav")
    }


  return (
   <header className='header'>
  <button className='profile'><CgProfile/></button>
    {/* <h3 className='home'>home</h3> */}


    {showNav && <nav className='nav'>
        <ul>
            <li onClick={()=> navhome()}>Home</li>
            <li onClick={()=> navcat()}>Menu</li>
            <li onClick={()=> navfaq()}>FAQS</li>
            <li onClick={()=> navsupport()}>Support</li>
            <li onClick={()=> navcart()}>Cart {' '}
            {countcartItems ? <button>{countcartItems}</button> : " "}</li>

        </ul></nav>}
    <button className='navbar' onClick={Shownavbar}><HiBars4/></button>
   </header>
  )
}

export default Nav