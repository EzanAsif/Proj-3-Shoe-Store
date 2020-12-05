import React from "react";
import { StoreData } from "../Store-data";
import { useParams } from "react-router-dom";
import { NavbarM } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const IndProd = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <NavbarM />
      <br />
      <div className="Ind-Item">
        <div className="ind-item-img">
          <img src={StoreData[id].img} alt="" height="200px" width="200px" />
        </div>
        <div className="ind-item-desc">
          <div className="ind-item-desc-heading">
            <h3>{StoreData[id].name}</h3>
          </div>
          <div className="ind-item-desc-price">
              <h3>${StoreData[id].price}.00</h3>
          </div>
          <div className="ind-item-desc-para">
            <p>{StoreData[id].desc}</p>
          </div>
        <div className="ind-item-buy-buttons">
            <button className = "add-to-cart">Add to cart</button>
            <button className = "buy-it-now">Buy it now</button>
        </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};
