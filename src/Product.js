import React from "react";

import "./product.css";

class Product extends React.Component {
  render() {
    return (
      <li className="product-entry">
        <div className="product-image">
          <img
            src="https://picsum.photos/175/150"
            alt="product description lorem ipsum dolor"
            className="product-picture"
          />
        </div>
        <div className="product-informations">
          <h2 className="product-title">{this.props.title}</h2>
          <p className="product-manufacturer">{this.props.manufacturer}</p>
          <p className="product-description">{this.props.description}</p>
        </div>
        <div className="product-buy-information">
          <p className="product-netto-price price">{this.props.netPrice}</p>
          <p className="product-gross-price price">{this.props.grossPrice}</p>
          <button
            className="add-to-cart-btn"
            id="addToCartBtn"
            onClick={() => this.props.addToCart(this.props.product)}
          >
            Add to Cart
          </button>
        </div>
      </li>
    );
  }
}

export default Product;
