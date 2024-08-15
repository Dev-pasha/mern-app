import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      _id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      _id: 2,
      name: "Product 2",
      price: 200,
    },
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        
        // Log the response to check its structure
        console.log("API Response:", data);

        // Ensure the data is an array before setting it
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API did not return an array:", data);
          setProducts([]); // Clear products if the response is not an array
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Clear products on error
      }
    };
    // fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
