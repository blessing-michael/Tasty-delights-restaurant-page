import React from 'react'

function Menu({menu}) {
    // console.log(title,category)
  return (
   <main className='section-center'>
   {menu.map((item)=>{
    const {id, title,price,img, desc}= item
    return <article key={id} className="menu-item">
      
      <img src={img} alt={title} className="img-menu" />


<div className="item-info">
<header>
       <h4>{title}</h4>
        <p>${price}</p>
       </header>
       <p>{desc}</p>

</div>
      

      
       
     

        {/* <p>{desc}</p> */}

    </article>
   })}

    

   </main>
  )
}

export default Menu