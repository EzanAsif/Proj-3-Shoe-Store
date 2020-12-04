import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import featuered1 from "../Images/featuered-1.jpg";
import featuered2 from "../Images/featuered-2.jpg";
import featuered3 from "../Images/featuered-3.jpg";
import featuered4 from "../Images/featuered-4.jpg";
import featuered5 from "../Images/featuered-5.jpg";
import featuered6 from "../Images/featuered-6.jpg";
import { StoreData } from "../Store-data";

export const FeaturedCol = () => {
  let store = StoreData;
  let storeKeys = Object.keys(StoreData);
  // console.log(storeKeys);
  return (
    <div className="FeaturedCol">
      <h2>Featured Collection</h2>
      <div className="featuredCol-cards">
        {storeKeys.map((keyName) => {
          const shoe = store[keyName];
          console.log(shoe);
          return (
            <div key = {keyName} className="featured-card">
              <div className="featured-card-image">
                <a href="">
                  <img src={shoe.img} alt="" />
                </a>
              </div>
              <div className="featured-card-title">
                <h4>{shoe.name}</h4>
              </div>
              <div className="featured-card-price">
                <h4>{shoe.price}</h4>
              </div>
              <div className="featured-card-router-button">
                <div className="view">
                  <a href="">VIEW</a>
                </div>
                <div className="add-to-cart">
                  <a href="">
                    <AddShoppingCartIcon className="feautured-cart" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// <div className="featured-card">
// <div className="featured-card-image">
//     <a href=""><img src={featuered2} alt=""/></a>
// </div>
// <div className="featured-card-title">
//     <h4>Item 2</h4>
// </div>
// <div className="featured-card-price">
//     <h4> $250.00</h4>
// </div>
// <div className="featured-card-router-button">
//     <div className="view">
//         <a href="">VIEW</a>
//     </div>
//     <div className="add-to-cart">
//         <a href=""><AddShoppingCartIcon className = "feautured-cart"/></a>
//     </div>
// </div>
// </div>

{
  /* <div className="featured-card">
  <div className="featured-card-image">
    <a href="">
      <img src={featuered3} alt="" />
    </a>
  </div>
  <div className="featured-card-title">
    <h4>Item 3</h4>
  </div>
  <div className="featured-card-price">
    <h4> $250.00</h4>
  </div>
  <div className="featured-card-router-button">
    <div className="view">
      <a href="">VIEW</a>
    </div>
    <div className="add-to-cart">
      <a href="">
        <AddShoppingCartIcon className="feautured-cart" />
      </a>
    </div>
  </div>
</div>; */
}

{
  /* <div className="featured-card">
  <div className="featured-card-image">
    <a href="">
      <img src={featuered4} alt="" />
    </a>
  </div>
  <div className="featured-card-title">
    <h4>Item 3</h4>
  </div>
  <div className="featured-card-price">
    <h4> $250.00</h4>
  </div>
  <div className="featured-card-router-button">
    <div className="view">
      <a href="">VIEW</a>
    </div>
    <div className="add-to-cart">
      <a href="">
        <AddShoppingCartIcon className="feautured-cart" />
      </a>
    </div>
  </div>
</div>; */
}

{
  /* <div className="featured-card">
          <div className="featured-card-image">
            <a href="">
              <img src={featuered5} alt="" />
            </a>
          </div>
          <div className="featured-card-title">
            <h4>Item 3</h4>
          </div>
          <div className="featured-card-price">
            <h4> $250.00</h4>
          </div>
          <div className="featured-card-router-button">
            <div className="view">
              <a href="">VIEW</a>
            </div>
            <div className="add-to-cart">
              <a href="">
                <AddShoppingCartIcon className="feautured-cart" />
              </a>
            </div>
          </div>
        </div> */
}

{
  /* <div className="featured-card">
  <div className="featured-card-image">
    <a href="">
      <img src={featuered6} alt="" />
    </a>
  </div>
  <div className="featured-card-title">
    <h4>Item 3</h4>
  </div>
  <div className="featured-card-price">
    <h4> $250.00</h4>
  </div>
  <div className="featured-card-router-button">
    <div className="view">
      <a href="">VIEW</a>
    </div>
    <div className="add-to-cart">
      <a href="">
        <AddShoppingCartIcon className="feautured-cart" />
      </a>
    </div>
  </div>
</div>; */
}
