import React from 'react'
import { useNavigate } from 'react-router'

function Menu({menu}) {
    // console.log(title,category)
    const navigate= useNavigate()

   
  return (
   <main className='section-center'>
   {menu.map((item)=>{
    const {id, title,price,img, desc}= item
    return <article key={id} className="menu-item">
      
      <img src={img} alt={title} className="img-menu" />
      


<div className="item-info">
<header>
       <h4 className='iteminfo-h4'>{title}</h4>
        <p className='iteminfo-p'>${price}</p>
       </header>
       <p className='iteminfo-desc'>{desc} <span className='ordernow-span'><button  className='ordernow-btn' onClick={()=> navigate("/menu")}>Order now</button></span> </p>

     
       

</div>
      

      
       
     

        {/* <p>{desc}</p> */}

    </article>
   })}

    

   </main>
  )
}

export default Menu