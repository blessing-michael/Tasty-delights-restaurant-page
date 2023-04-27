import React from 'react'
import { AiFillTwitterCircle, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <section className='footer'>
        <div className="contact" >
            <h2 className='footer-h2' >TASTY DELIGHTS</h2>
            <h3 className='footer-h3'>Contact</h3>
            <p className='footer-p'>blessingmike334@gmail.com</p>
            <p className='footer-p'>09038296450</p>

            
        </div>
        <div className="locations"  style={{marginBottom:"20px"}}>
        <h3 className='footer-h3'>Locations</h3>
            <p className='footer-p'>Lekki</p>
            <p className='footer-p'>Ikoyi</p>
            <p className='footer-p'>Victoria Island</p>
            <p className='footer-p'>Marina</p>

        </div>
        <div className="">
        <h3 className='footer-h3'>Socials</h3>
<div className="socials">
<AiOutlineInstagram style={{marginRight:"20px"}}/>
        <AiFillTwitterCircle style={{marginRight:"20px"}}/>
        <AiOutlineLinkedin />

</div>
       
        </div>

        <div className="all-rights">
        <p className='all-rightP footer-p' > &copy; {new Date().getFullYear()} Blessing Michael. All Rights Reserved.</p>
        </div>
    </section>
  )
}

export default Footer