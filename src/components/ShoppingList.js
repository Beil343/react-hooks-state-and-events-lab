import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[selectedCategory,setCategory]=useState("All");
  const filteredItems= selectedCategory==="All" ? items : items.filter((item)=> item.category === selectedCategory);

  function handleCategory(event){
    setCategory(event.target.value)
  }

   
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

