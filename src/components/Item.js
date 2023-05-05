import React,{useState} from "react";

function Item({ name, category }) {
  const[cart,setCart]=useState(true);
  const cartStatus= cart? "" : "in-cart"
  const cartText=cart? "Add to Cart" : "Remove From Cart"
  function handleCart(){
    let changeStatus= !cart;
    setCart(changeStatus);
  }
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{cartText}</button>
    </li>
  );
}

export default Item;
