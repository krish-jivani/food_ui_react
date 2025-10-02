import React, { useContext } from "react";
import "./Food.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "./Fooditem/FoodItem";

const Food = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food" id="food">
      <h2>Our Popular Foods</h2>
      <div className="food-list">
        {food_list.map((item, index) => {
            if(category==="All" || item.category===category)
            {
          return (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );}
        })}
      </div>
    </div>
  );
};

export default Food;
