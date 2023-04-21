import React from 'react'
import { AiFillTwitterCircle, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <section className='footer'>
        <div className="contact"  style={{marginBottom:"20px"}}>
            <h2 style={{fontSize:"1.2rem", marginBottom:"20px"}}>TASTY DELIGHTS</h2>
            <h3 style={{ color:"rgb(210, 208, 208)"}}>Contact</h3>
            <p style={{ color:"rgb(210, 208, 208)"}}>blessingmike334@gmail.com</p>
            <p style={{ color:"rgb(210, 208, 208)"}}>0903-------</p>

            
        </div>
        <div className="locations"  style={{marginBottom:"20px"}}>
        <h3>Locations</h3>
            <p style={{ color:"rgb(210, 208, 208)"}}>Lekki</p>
            <p style={{ color:"rgb(210, 208, 208)"}}>Ikoyi</p>
            <p style={{ color:"rgb(210, 208, 208)"}}>Victoria Island</p>
            <p style={{ color:"rgb(210, 208, 208)"}}>Marina</p>

        </div>
        <div className="">
        <h3>Socials</h3>
<div className="socials">
<AiOutlineInstagram style={{marginRight:"20px"}}/>
        <AiFillTwitterCircle style={{marginRight:"20px"}}/>
        <AiOutlineLinkedin />

</div>
       
        </div>

        <div className="all-rights">
        <p className='all-rightP'> &copy; {new Date().getFullYear()} Blessing Michael. All Rights Reserved.</p>
        </div>
    </section>
  )
}

export default Footer