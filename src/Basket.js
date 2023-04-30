import React, { useState } from 'react'

import Follow from './Follow';

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
    <div className="basket">

   
    <article className='cart-article'>
        <h1 className='cart-h1'>Cart Items</h1>
   
        <div>{cartItems.length===0 && <div className='empty-cart'>Cart is empty</div>}


</div>


{cartItems.map((item)=>{

  // <div className="whole">

 
  
   
  return (
    
    <div key={item.id} className='cartadd-item'>
      
      <div className="item-name">{item.title}</div>
    
      <div className="button">
    <button onClick={()=>onAdd(item)} className='add-cartbbtn'>+</button>
    <button className='remove-cartbtn' onClick={()=>onRemove(item)}>-</button>
  </div>
      <div className="itm qty">{item.qty} * ${item.price.toFixed(2)}</div>

    </div>
  )
  {/* </div> */}
})}
{cartItems.length !== 0 &&  <div>
  
    <hr></hr>

    <div className="div1-cart">
    <div className="margin-right: 10px;">Item price</div>
    <div className="itempricecount">${itemsPrice.toFixed(2)}</div>
      
      


    </div>
    <div className="div2-tax">
    <div className="itemprice">Tax price</div>
    <div className="itempricecount">${taxPrice.toFixed(2)}</div>

    </div>
    <div className="div3-shipping">
    <div className="itemprice">Shipping price</div>
    <div className="itempricecount">${shippingPrice.toFixed(2)}</div>

    </div>
    <div className="div4-total">
    <div className="itemprice">Total price</div>
    <div className="itempricecount">${totalPrice.toFixed(2)}</div>
   

    </div>
    <div className="checkout-btnCon">
      <button className='checkout-btn'>checkout</button>
    </div>
    {/* <div className="div1">
    <div className="margin-right: 10px;">item price</div>
    <div className="itempricecount">${itemsPrice.toFixed(2)}</div>
    <div className="itemprice">tax price</div>
    <div className="itempricecount">${taxPrice.toFixed(2)}</div>
    <div className="itemprice">shipping price</div>
    <div className="itempricecount">${shippingPrice.toFixed(2)}</div>
    <div className="itemprice">total price</div>
    <div className="itempricecount">${totalPrice.toFixed(2)}</div>
  </div> */}
  
  </div>}


    </article>
    <Follow/>
    </div>
 
  )
}

export default Basket