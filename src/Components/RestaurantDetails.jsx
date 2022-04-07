import React from "react";
import styles from "./RestaurantDetails.module.css";

const RestaurantDetails = (props) => {
  const {
    name,
    id,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods: { cash, card },
    rating,
    votes,
    reviews,
    src
  } = props.data;
  return (
    <>
      <div className={styles.box}>
        <div className={styles.innerbox}>
          <div style={{ flex: 1 }}>
            <img width="150px" src={src} alt={name} />
          </div>
          <div style={{ textAlign: "left", paddingLeft: 10, flex: 2 }}>
            <h2 style={{ color: "#000000" }}>{name}</h2>
            <p style={{ color: "#0000ff" }}>{cuisine.join(", ")} </p>
            <p style={{ color: "#ff0000" }}>Cost for two: ₹{costForTwo}</p>
            <p>
              Min: ₹{minOrder} - Upto {deliveryTime} min{" "}
            </p>
            {cash && card ? (
              <p>Accepts: "Cash and Card"</p>
            ) : card ? (
              <p>Accepts: "Card"</p>
            ) : (
              <p>Accepts: "Cash"</p>
            )}
          </div>

          <div style={{ textAlign: "right", flex: 0.7 }}>
            <div
              style={{
                color: "white",
                background: "green",
                height: "30px",
                width: "40px",
                textAlign: "center",
                fontSize: "20px",
                borderRadius: 6,
                alignSelf: "right"
              }}
            >
              {" "}
              {rating}{" "}
            </div>
            <div> {votes} votes </div>
            <div> {reviews} reviews </div>
            <div>
              <button
                style={{
                  color: "yellow",
                  background: "#008080",
                  height: "40px",
                  width: "110px",
                  borderRadius: 10,
                  marginTop: "155px",
                  border: "1px solid #008080"
                }}
              >
                Order Online >
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantDetails;
