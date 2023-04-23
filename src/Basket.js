import React, { useState } from 'react'

function Basket(props) {
  const {cartItems, onAdd, onRemove}= props
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice +shippingPrice

  // const [cartItems, setCartItems]= useState([])

  // const onRemove=()=>{
  //   console.log("removed")
  // }
  

  // const onAdd= (product)=>{
  //   const exist = cartItems.find((x)=> x.id === product.id)
  //   if(exist){
  //     setCartItems(cartItems((x)=> x.id === product.id ? {...exist, qty: exist.qty +1} : x))
  //   }
  //   else{
  //     setCartItems([...cartItems, {...product, qty: 1}])
  //   }
  // }


   
    // console.log(cartItems)
  
  return (
    <article>
        <h1>cart items</h1>
   
        <div>{cartItems.length===0 && <div>cart is empty</div>}


</div>


{cartItems.map((item)=>{

  // <div className="whole">

 
  
   
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
  {/* </div> */}
})}
{cartItems.length !== 0 &&  <div>
  <div className="div1">
    <hr></hr>
    <div className="itemprice">item price</div>
    <div className="itempricecount">${itemsPrice.toFixed(2)}</div>
    <div className="itemprice">tax price</div>
    <div className="itempricecount">${taxPrice.toFixed(2)}</div>
    <div className="itemprice">shipping price</div>
    <div className="itempricecount">${shippingPrice.toFixed(2)}</div>
    <div className="itemprice">total price</div>
    <div className="itempricecount">${totalPrice.toFixed(2)}</div>
  </div>
  
  </div>}


    </article>
 
  )
}

export default Basket