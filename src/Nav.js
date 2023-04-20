import React from 'react'
import { CgProfile} from "react-icons/cg";
import { HiBars4} from "react-icons/hi2";

function Nav() {

  return (
   <header className='header'>
  <button className='profile'><CgProfile/></button>
    <h3 className='home'>home</h3>
    <button className='navbar'><HiBars4/></button>
   </header>
  )
}

export default Nav