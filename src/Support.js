import React, { useState } from 'react'
import Follow from './Follow'
import { toast } from 'react-toastify'

function Support() {
  const [name, setName]= useState("")
  const [message, setMessage]= useState("")

  const HandleSubmit=(e)=>{
   
    e.preventDefault()
    setName("")
    setMessage("")
    // setName({email:"", message:""})
    toast.success('thank you for reaching out to us')
   


  }
  return (
    <div >
     
      <main className='support-us'>

      <div className="center-support">
      <div className="contact-text">
      <h1 className='contact-h1'>contact our support</h1>
      <p className='contact-p'>Got questions or concerns about our service, send us a message and we will get back to you soonest.</p>

      </div>

        
</div>
    

    

      <form className='form' >
     <div className="email">
     <label className='email-label' htmlFor='email'>email</label>
      <input type="email"  placeholder='Your email ' className='email-input' id="email" name='email' value={name} onChange={(e)=>setName(e.target.value)} />

      
     </div>
    
   
   <div className="message">

    <div className="label-div" >
    <label className='label-message' htmlFor='message'>message</label>

    </div>
   
  
 

  
      <textarea name="" id="message" cols="30" rows="10" placeholder='Drop a message' className='textarea' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
   </div>
   
   <button type='submit' className='support-btn' onClick={HandleSubmit}>Send message</button>
      </form>
     

      {/* <div className="form-info">
      <form action="">
      <label>email</label>
        <input type="email"  placeholder='Your email'/>
        <label>message</label>
        <textarea name="" id="" cols="30" rows="10" placeholder='Drop a message'></textarea>
      </form>
      <button type='submit'>send message</button>
        
      </div> */}
      </main>
      <Follow/>
    </div>
  )
}

export default Support