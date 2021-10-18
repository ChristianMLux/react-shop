import React from "react";

import Product from "./Product";
import "./products.css";

let idx = 0;
let userID = 12345;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
    };
  }
  addToCart(product) {
    let cartItem = {
      productID: product.id,
      productTitle: product.title,
      buyerID: userID,
    };
    sessionStorage.setItem(idx, JSON.stringify(cartItem));
    idx++;
    var shoppingCart = [],
      keys = Object.keys(sessionStorage),
      i = keys.length;
    while (i--) {
      let item = JSON.parse(sessionStorage.getItem(keys[i]));
      shoppingCart.push(item);
    }
    console.log(shoppingCart);
  }

  componentDidMount() {
    let url = "http://localhost:3000/products";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <section className="products-section">
            <ul className="product-list">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  title={product.title}
                  description={product.description}
                  grossPrice={product.grossPrice}
                  netPrice={product.netPrice}
                  manufacturer={product.manufacturer}
                  addToCart={this.addToCart}
                  index={product.id}
                />
              ))}
            </ul>
          </section>
        </div>
      );
    }
  }
}
export default Products;
