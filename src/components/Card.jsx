import React from "react";

function Card({ image, name, price }) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "250px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img style={{ height: "200px", width: "100%" }} src={image} alt="" />
      <h2>{name}</h2>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h4>{price}</h4>
        <i style={{marginTop: "25px", cursor: "pointer"}} class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
}

export default Card;
