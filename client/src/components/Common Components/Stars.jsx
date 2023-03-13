import React from "react";
import uuid from "react-uuid";
import "../../css/Store/stars.css";
import axios from "axios";

export default function Stars({
  stars,
  price,
  basket,
  setBasket,
  purchase,
  setPurchase,
  totalPrice,
  setTotalPrice,
  totalStars,
  setTotalStars,
}) {
  const getUserID = () => {
    axios.get("/user").then((response) => {
      response.data.forEach((user) => {
        console.log(user.userID);
        return user.userID;
      });
    });
  };

  const updateBasket = () => {
    const newPurchase = {
      purchaseID: uuid(),
      userID: getUserID(),
      stars: stars,
      price: price,
      date: Date.now(),
    };

    setBasket(basket + 1);
    setPurchase([newPurchase, ...purchase]);
    setTotalPrice(totalPrice + price);
    setTotalStars(totalStars + stars);
    console.log();
  };

  return (
    <div className="stars-card-container">
      <div className="stars-to-purchase">{stars} stars</div>
      <div className="stars-price">£{price}</div>
      <button className="add-basket" onClick={updateBasket}>
        Add to basket
      </button>
    </div>
  );
}
