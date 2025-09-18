import React from 'react';
import { Link } from 'react-router-dom';

function Card({ product, showDescription = true }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        {/* Link to product details page */}
        <Link to={`/viewproducts/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img-top"
            style={{ height: '180px', objectFit: 'cover' }}
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          {showDescription && (
            <p className="card-text text-truncate">{product.description}</p>
          )}
          <h6 className="mt-auto fw-bold">${product.price}</h6>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="badge bg-secondary">{product.category}</span>
            <span className="text-warning">⭐ {product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;