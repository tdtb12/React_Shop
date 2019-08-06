import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="card-container">
        {this.props.products.map(product => (
          <div className="card" key={product.id}>
            <span className="card-title font-weight-bold">
              {product.name}
            </span>
            <div className="img-wrapper">
              <img
                src={process.env.PUBLIC_URL + "/img/" + product.id + ".jpg"}
                alt={product.name}
              />
            </div>
            <p className="card-text">{product.price}</p>
            <Link
              to={{
                pathname: `/React_Shop/${product.id}`
              }}
              className="stretched-link"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;
