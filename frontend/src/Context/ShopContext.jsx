import { createContext } from "react";
import all_products from "../assets/all_products";
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //add to cart

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems)
  };

  //remove from cart
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  //get total cart amount

  const totalCartAmount = () => {
    let total = 0;
    all_products.forEach((product) => {
      total += product.new_price * cartItems[product.id];
    });
    return total;
  };

  //get total cart items

  const totalCartItems = () => {
    let count = 0;
    all_products.forEach((product) => {
      count += cartItems[product.id];
    });
    return count;
  };

  console.log(cartItems);

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    totalCartItems
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
