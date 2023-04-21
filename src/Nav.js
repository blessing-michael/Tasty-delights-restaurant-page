import React, { useState } from 'react'
import { CgProfile} from "react-icons/cg";
import { HiBars4} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Nav() {
    const [showNav, setShowNav]= useState(false)
    const navigate= useNavigate()

    const Shownavbar=()=>{
        setShowNav(!showNav)
        console.log("clicked nav")
    }


  return (
   <header className='header'>
  <button className='profile'><CgProfile/></button>
    <h3 className='home'>home</h3>


    {showNav && <nav className='nav'>
        <ul>
            <li onClick={()=> navigate("/")}>Home</li>
            <li onClick={()=> navigate("/cat")}>Categories</li>
            <li onClick={()=> navigate("/faq")}>Contact</li>
            <li onClick={()=> navigate("/support")}>Support</li>

        </ul></nav>}
    <button className='navbar' onClick={Shownavbar}><HiBars4/></button>
   </header>
  )
}

export default Nav