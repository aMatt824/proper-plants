import { useState } from "react";

import PLANTS from "./data";
import Cart from "./cart/Cart";
import Plants from "./plant/Plants";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const existingItem = cart.find((i) => i.id === plant.id);
    if(existingItem){
    setCart(
      cart.map((item) =>
      item.id === plant.id
    ? {... item, quantity: item.quantity + 1}
  : item
)
    );
    }else {
      setCart([...cart, {...plant, quantity: 1}]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(
      cart.map((item) =>
      item.id === itemToRemove.id
    ? { ...item, quantity: item.quantity -1}
    : item
  )
   .filter((item) => item.quantity > 0)
    );
     
}

return (
  <>
  <h1> Proper Plants</h1>
  <main>
    <Plants plants={PLANTS} addToCart={addToCart} />
    <Cart 
    cart={cart}
    removeFromCart={removeFromCart}
    addToCart={addToCart}/>
  </main>
  </>
);
}