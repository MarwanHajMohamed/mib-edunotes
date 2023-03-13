import React, { useState, useEffect } from "react";

import StarCard from "../components/Common Components/Stars";
import Modal from "@mui/material/Modal";
import "../css/Store/store.css";
import "../css/Payment/payment.css";
import axios from "axios";

export default function Store() {
  const [stars, setStars] = useState("");
  const [basket, setBasket] = useState(0);
  const [purchase, setPurchase] = useState([]);
  const prices = [3.99, 9.99, 16.99, 29.99];
  const starsLabel = [50, 150, 300, 500];
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    document.title = "Store | EduNotes";

    const getStars = () => {
      axios
        .get("/user")
        .then((response) => {
          response.data.forEach((user) => {
            if (user.email === localStorage.getItem("emailData")) {
              setStars(user.stars);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getStars();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const deleteStars = (e) => {
    setPurchase(purchase.filter((item) => item.purchaseID !== e.purchaseID));
    setBasket(basket - 1);
    setTotalPrice(totalPrice - e.price);
    setTotalStars(totalStars - e.stars);
  };

  const [openPayment, setOpenPayment] = useState(false);
  const handleOpenPayment = () => setOpenPayment(true);
  const handleClose = () => setOpenPayment(false);

  const checkout = () => {
    purchase.map((item) => {
      return axios
        .post("/purchase", {
          purchaseID: item.purchaseID,
          userID: localStorage.getItem("userID"),
          stars: item.stars,
          price: item.price,
          purchaseDate: item.date,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const saveStars = () => {
    return axios
      .put(`/user/${localStorage.getItem("userID")}`, {
        stars: totalStars,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="store-page">
        <div className="stars-container">
          <i className="fa-solid fa-star"></i>
          <div className="stars-counter">{stars}</div>
        </div>
      </div>
      <div className="basket-container" onClick={handleOpen}>
        <i className="fa-solid fa-cart-shopping"></i>
        <div className="basket-counter">{basket}</div>
      </div>
      <div className={open ? "cart-open" : "cart-close"}>
        <div className="cart-items">
          {purchase.map((item, key) => {
            return (
              <div className="basket-list-container" key={key}>
                <div className="basket-stars">{item.stars} Stars</div>
                <div className="basket-price">£{item.price}</div>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => deleteStars(item)}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="buy-container">
          <button className="buy-button" onClick={handleOpenPayment}>
            Checkout
          </button>
          <div className="total">
            Total: £{Math.round(totalPrice * 100) / 100}
          </div>
        </div>
      </div>
      <div className="store-container" onClick={() => setOpen(false)}>
        <div className="store-intro-container">
          <div className="store-description-container">
            <div className="store-description">
              Acquire stars and boost your notes to reach more people
            </div>
            <div className="store-description-two">
              Stand out from the crowd and customise your profile to your liking
            </div>
          </div>
        </div>
        <div className="stars-cards-container">
          <StarCard
            stars={starsLabel[0]}
            price={prices[0]}
            basket={basket}
            setBasket={setBasket}
            purchase={purchase}
            setPurchase={setPurchase}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalStars={totalStars}
            setTotalStars={setTotalStars}
          />
          <StarCard
            stars={starsLabel[1]}
            price={prices[1]}
            basket={basket}
            setBasket={setBasket}
            purchase={purchase}
            setPurchase={setPurchase}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalStars={totalStars}
            setTotalStars={setTotalStars}
          />
          <StarCard
            stars={starsLabel[2]}
            price={prices[2]}
            basket={basket}
            setBasket={setBasket}
            purchase={purchase}
            setPurchase={setPurchase}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalStars={totalStars}
            setTotalStars={setTotalStars}
          />
          <StarCard
            stars={starsLabel[3]}
            price={prices[3]}
            basket={basket}
            setBasket={setBasket}
            purchase={purchase}
            setPurchase={setPurchase}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalStars={totalStars}
            setTotalStars={setTotalStars}
          />
        </div>
        {/* <button onClick={() => saveStars()}>Test</button> */}
      </div>

      <Modal open={openPayment} onClose={handleClose} className="modal">
        <div className="payment-container">
          <div className="payment-form">
            <div className="details">Personal Details</div>
            <div className="details-container">
              <label>Email</label>
              <input type="text" />
              <label>Phone Number</label>
              <input type="text" />
            </div>
            <div className="details">Payment Details</div>
            <div className="card-info-container">
              <label>Card Information</label>
              <input type="text" placeholder="1234 1234 1234 1234" />
              <div className="row-two">
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVC" />
              </div>
            </div>
            <div className="pay-button-container">
              <button
                className="pay-button"
                onClick={() => {
                  checkout();
                  saveStars();
                }}
              >
                Pay
              </button>
            </div>
            <div className="apple-pay-container">
              <i class="fa-brands fa-apple"></i>
              <button className="apple-pay-button">Pay</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
