import React from "react";

function Home(props) {
  console.warn("home", props.data);
  return (
    <div>
      <div className="add">
        <span className="cart-count">{props.data.length}</span>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
          alt="cart"
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart">
        <div className="imghai item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/61a9k6YlFsL._SL1000_.jpg"
            alt="nokia"
          />
        </div>
        <div className="text">
          <span>Nokia 6.1 Plus</span>
          <span>Price: $10000.00</span>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "nokia 6.1 plus" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
