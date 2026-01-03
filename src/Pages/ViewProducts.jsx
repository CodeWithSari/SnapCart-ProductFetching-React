import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaRupeeSign
} from "react-icons/fa";

import Card from "../Components/Card";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";

function ViewProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );
      const data = await response.json();
      setProduct(data);

      const relatedResponse = await fetch(
        `https://dummyjson.com/products/category/${data.category}`
      );
      const relatedData = await relatedResponse.json();

      const filteredRelated = relatedData.products
        .filter((p) => p.id !== data.id)
        .slice(0, 4);

      setRelatedProducts(filteredRelated);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="text-center my-5">
        Loading product...
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Main Product Section */}
      <div className="row mb-5 align-items-center">
        {/* Image */}
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow"
          />

          {/* Gallery */}
          {product.images && product.images.length > 1 && (
            <div className="row mt-3">
              {product.images.slice(0, 4).map((image, index) => (
                <div className="col-3" key={index}>
                  <img
                    src={image}
                    alt={`${product.title}-${index}`}
                    className="img-thumbnail"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.description}</p>

          {/* Price */}
          <h3 className="text-success fw-bold">
            <FaRupeeSign /> {product.price}
          </h3>

          {product.discountPercentage && (
            <span className="badge bg-danger mb-3">
              {product.discountPercentage}% OFF
            </span>
          )}

          <div className="my-3">
            <span className="badge bg-secondary me-2">
              {product.category}
            </span>
            <span className="badge bg-warning text-dark me-2">
              <FaStar /> {product.rating}
            </span>
            <span className="badge bg-info text-dark">
              Stock: {product.stock}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-3 mt-4">
            <button
              className="btn btn-primary px-4"
              onClick={() => dispatch(addToCart(product))}
            >
              <FaShoppingCart /> Add to Cart
            </button>

            <button
              className="btn btn-outline-danger px-4"
              onClick={() => dispatch(addToWishlist(product))}
            >
              <FaHeart /> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <>
          <h4 className="mt-5 mb-3">Related Products</h4>
          <div className="row">
            {relatedProducts.map((item) => (
              <Card
                key={item.id}
                product={item}
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
