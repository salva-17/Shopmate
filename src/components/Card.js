import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./card.css";

export const Card = ({product}) => {
  const {addToCart, cartList, removeFromCart} = useCart();
  const {name, price, image} = product;
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === product.id)
    setIsInCart(productIsInCart);
  }, [cartList, product.id]) 

  return (
    <div className="card">
      <img src={image} alt={name}/>
      <p className="name">{name}</p>
      <div className="purchase">
        <p>
        ${price}
        </p>
        {isInCart ? <button className="remove" onClick={() => removeFromCart(product)}>Remove</button>: <button onClick={() => addToCart(product)}>Add To Cart</button> }
        
      </div>
      
    </div>
  )
}
