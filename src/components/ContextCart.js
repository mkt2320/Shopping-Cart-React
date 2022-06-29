import React, { useContext } from "react";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>


      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items in shopping cart
        </p>
        <table>
  <tr>
    <th>Item List</th>
    <th>Products</th>
    <th>Quantity</th>
    <th>Delete</th>
  </tr>
  </table>
       
        <div className="cart-items">
          <div className="cart-items-container">
            <div>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </div>
          </div>

          <div className="card-total">
          <h3>
            Total Price : <span>{totalAmount}₹</span>
          </h3>
          
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
              
          <button  className="checkout" onClick={() => alert('Make payment!')}>
                Checkout
          </button>
        </div>
        
        </div>

      
      </section>
    </>
  );
};

export default ContextCart;
