
import React, { useState } from "react";

function App() {

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphone", price: 3000 }
  ];

  const [cart, setCart] = useState([]);

  // Add Product
  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);

    }
  };

  // Remove Product
  const removeFromCart = (id) => {

    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  // Calculate Total
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "30px" }}>

      <h1>Add To Cart App</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>

          <p>
            {product.name} - ₹{product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

        </div>
      ))}

      <hr />

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>

            <p>
              {item.name}
              {" | "}
              Qty: {item.quantity}
              {" | "}
              ₹{item.price * item.quantity}
            </p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>

          </div>
        ))
      )}

      <hr />

      <h2>Total: ₹{totalPrice}</h2>

    </div>
  );
}

export default App;
```
