import React, { useState } from 'react'
import Follow from '../Follow'
import menu from '../MenuData'
import Product from '../Product'
import Basket from '../Basket'


function Cat(props) {
    const { onAdd, onRemove}= props
    console.log(menu)

    // const [cartItems, setCartItems]= useState([])

    // const onRemove=()=>{
    //   console.log("removed")
    // }
    
  
    // const onAdd= (product)=>{
    //   const exist = cartItems.find((x)=> x.id === product.id)
    //   if(exist){
    //     setCartItems(cartItems((x)=> x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
    //   }
    //   else{
    //     setCartItems([...cartItems, {...product, qty: 1}])
    //   }
      
    // }


  return (
    <div>

 
    <main className='block' >
        <h2 className='cat-h2'>Our Menu</h2>
        <div className='underline'></div>
        <p className='cat-p'>Enjoy a wholesome experience of the rich meal through a variety of delicious and authentic tasty delights dishes prepared to tingle your taste buds! Exclusively on Tasty Delights.</p>

        <div className="row">
            {menu.map((men)=>{

return(
    <div key={men.id} className='catinfo-div'> 
    <img src={men.img} alt="" className='small' />
    <h3 className='cat-title'>{men.title} <span className='cat-price'>${men.price}</span></h3>
    {/* <div className='cat-price'>${men.price} <span className='btn-span'>  </span></div> */}
    <div className="btn-cat">
      <button onClick={()=>onAdd(men)} className='add-btn'>Add to Cart</button>
    </div> 

</div>

)

                
                // <Product key={men.id} men={men}/>
                // console.log( men.title, men.img,'cominf from cat')
            })}
          
            
        </div>
        {/* {console.log(cartItems)} */}

{/* {cartItems.map((item)=>{
  return (
    <div key={item.id}>
      <div className="item-name">{item.title}</div>
      <div className="button">
        <button onClick={()=>onAdd(item)}>+</button>
        <button onClick={()=>onRemove(item)}>-</button>
      </div>
      <div className="itm qty">{item.qty} * ${item.price.toFixed(2)}</div>

    </div>
  )
})}  */}

        {/* {cartItems.map((item)=>{
  return (
    <Basket key={item.id} item={item} cartItems={cartItems}/>
  )
})} */}





        {/* {menu.map((men)=>{
            console.log("men", men)
            const {id, title,price,img, desc}= men
            return <article key={id} style={{flex:"2", padding:"1rem", margin:"0.5rem", borderRadius:"0.5rem"}}>

                <div className="cat-info" style={{display:"flex", justifyContent:"space-between"}}>
                <img src={img} alt="" style={{maxWidth:"8rem"}}/>
                <h3>{title}</h3>
                <p>${price}</p>
                 
                <p>{desc}</p> */}
                {/* <div className="cat-details">
               

                </div> */}
               
{/* 
                </div>
               

                <div className="button-cat">
                    <button>add</button>
                </div>
                
            </article>
        })} */}
         {/* <Basket/> */}
    
        {/* <Category/> */}
    </main>
    <Follow/>
    </div>
  )
}

export default Cat