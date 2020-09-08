import React from "react";
function Header(props) {
  console.warn("Header" , props.data);
  return (
    <div>
      <div className="add">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart" />
      </div>
    </div>
  );
}

export default Header;
