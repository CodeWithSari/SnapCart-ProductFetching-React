import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';  // Import from components folder

function Products() {
  const baseurl = 'https://dummyjson.com/products';
  const [products, setProducts] = useState([]);

  const productfetching = async () => {
    try {
      const response = await fetch(baseurl);
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.log("error: " + err);
    }
  };

  useEffect(() => {
    productfetching();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Products</h1>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-muted">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Products;