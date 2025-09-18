import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card';  // Import from components folder

function ViewProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      
      // Fetch related products from the same category
      const relatedResponse = await fetch(`https://dummyjson.com/products/category/${data.category}`);
      const relatedData = await relatedResponse.json();
      
      // Filter out the current product and limit to 4 related products
      const filteredRelated = relatedData.products
        .filter(p => p.id !== data.id)
        .slice(0, 4);
      
      setRelatedProducts(filteredRelated);
    } catch (err) {
      console.log("error: " + err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-5">Loading product...</div>;
  }

  return (
    <div className="container my-5">
      {/* Main product details */}
      <div className="row mb-5">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
          {/* Product gallery if available */}
          {product.images && product.images.length > 1 && (
            <div className="row mt-3">
              {product.images.slice(0, 4).map((image, index) => (
                <div key={index} className="col-3">
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="img-thumbnail"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4 className="text-success">${product.price}</h4>
          <p className={product.discountPercentage ? 'text-danger' : ''}>
            {product.discountPercentage && 
              <>Discount: <strong>{product.discountPercentage}% OFF</strong></>
            }
          </p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
          <p><strong>Stock:</strong> {product.stock} units available</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>

      {/* Related products section */}
      {relatedProducts.length > 0 && (
        <>
          <h3 className="mt-5">Related Products</h3>
          <div className="row">
            {relatedProducts.map(relatedProduct => (
              <Card 
                key={relatedProduct.id} 
                product={relatedProduct} 
                showDescription={false}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ViewProducts;