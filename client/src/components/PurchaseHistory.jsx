import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PurchaseHistory() {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    axios
      .get(`/purchase/user/${localStorage.getItem("userID")}`)
      .then((response) => {
        setPurchases(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <div className="purchase-wrapper">
      <div className="row">
        <div className="row-one">
          <div className="price">Price</div>
          <div className="stars">Stars</div>
        </div>
        <div className="date">Date Purchased</div>
      </div>
      {purchases.map((purchase) => {
        return (
          <div className="purchase-history-container">
            <div className="purchase-box">
              <div>£{purchase.price}</div>
              <div>{purchase.stars} Stars</div>
            </div>
            <div>
              {new Date(purchase.purchaseDate).toLocaleDateString("en-GB")}
            </div>
          </div>
        );
      })}
    </div>
  );
}
