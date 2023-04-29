import React, { useState } from 'react'
import { CgProfile} from "react-icons/cg";
import { HiBars4} from "react-icons/hi2";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Nav(props) {
    const [showlinks, setShowLinks]= useState(false)
    const {countcartItems}= props
    const navigate= useNavigate()

    const navcat= ()=>{
                navigate("/menu")
                
            
             }
             const navhome= ()=>{
                 navigate("/")
              
             }
            //  const navfaq= ()=>{
            //      navigate("/faq")
                
            //  }
             const navsupport= ()=>{
                 navigate("/support")
                
            }
            const navcart= ()=>{
                        navigate("/cart")
               
                     }
                     const toggleNav=()=>{
                        setShowLinks(true)
                        console.log("clicked nav")


                     }
        

    return(
    <nav className='nav-name'>
        <div className="nav-center">
            <div className="nav-header">
                <div className="logo">
               <img src="./images/logo.svg" alt="" />
              

                </div>
                {/* //             <li onClick={()=> navcart()}>Cart {' '}
//             {countcartItems ? <button>{countcartItems}</button> : " "}</li> */}
             
               <div className="icons-grp">
               <button className='navbar-btn'onClick={toggleNav}> <HiBars4/></button>
                <div className="cart-div" onClick={navcart}>
                    <button className='cart-btn'><FaCartArrowDown/>{' '}{countcartItems? <span className='cart-numspan'>{countcartItems}</span>: <span className='cart-numspan'>0</span> }   </button>


{/* 
               <button className='cart-btn'> <FaCartArrowDown/><span className='cart-numspan'>0</span></button> */}
              
                </div>

               </div>
               
            </div>
           <div className="links-container show-container">
                <ul className='links' >
                <li onClick={()=> navhome()}>Home</li>
            <li onClick={()=> navcat()}>Menu</li>
           
         <li onClick={()=> navsupport()}>Support</li>
           

                </ul>
            </div>
        </div>
        
    </nav>
            
    )









    // FIRST STYLING
//     const {countcartItems}= props
//     const [showNav, setShowNav]= useState(false)

//     const Hidenav=()=>{
//         showNav(true)
//     }
//     const navigate= useNavigate()

    
//     const navcat= ()=>{
//         navigate("/menu")
//         setShowNav(false)
    
//     }
//     const navhome= ()=>{
//         navigate("/")
//         setShowNav(false)
//     }
//     const navfaq= ()=>{
//         navigate("/faq")
//         setShowNav(false)
//     }
//     const navsupport= ()=>{
//         navigate("/support")
//         setShowNav(false)
//     }
//     const navcart= ()=>{
//         navigate("/cart")
//         setShowNav(false)
//     }

//     const Shownavbar=()=>{
//         setShowNav(!showNav)
//         console.log("clicked nav")
//     }


//   return (
//    <header className='header'>
//   <button className='profile'><CgProfile/></button>
  


//     {showNav && <nav className='nav'>
//         <ul className='links-container'>
//             <li onClick={()=> navhome()}>Home</li>
//             <li onClick={()=> navcat()}>Menu</li>
//             <li onClick={()=> navfaq()}>FAQS</li>
//             <li onClick={()=> navsupport()}>Support</li>
//             <li onClick={()=> navcart()}>Cart {' '}
//             {countcartItems ? <button>{countcartItems}</button> : " "}</li>

//         </ul></nav>}
//     <button className='navbar' onClick={Shownavbar}><HiBars4/></button>
//    </header>
//   )
}

export default Nav