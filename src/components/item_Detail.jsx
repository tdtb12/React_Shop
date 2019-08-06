import React, { Component } from "react";

class ItemDetail extends Component {
  render() {
    const { products } = this.props;
    const { id } = this.props.routeProps.match.params;
    return (
      <div className="item-container">
        <div className="item-detail ">
          <h2 className="font-weight-bolder">{products[id - 1].name}</h2>
          <div className="img-wrapper" style={{ height: "50vh" }}>
            <img
              src={
                process.env.PUBLIC_URL + "/img/" + products[id - 1].id + ".jpg"
              }
              alt={products[id - 1].name}
            />
          </div>
          <p>{products[id - 1].price}</p>
          <form action="">
            <input
              type="number"
              name="quantity"
              min="1"
              max={products[id - 1].count}
            />
            <input type="submit" value="加入購物車" />
          </form>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
