import React, { Component } from "react";

class Card extends React.Component {
  state = {
    cards: []
  };

  componentDidMount() {
    fetch("https://dejeneruta.github.io/booztData/product_list.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data }).then(data => console.log(data));
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        {this.state.cards.map((cards, index) => (
          <div className="card-container">
            <div key={index} className="image">
              <img
                src={cards.filename.replace(/^http:\/\//i, "https://")}
                className="img-responsive"
              />
            </div>
            <div className="details">
              <p>Product name: {cards.product_name}</p>
              <p>Product brand: {cards.brand_name}</p>
              <p> Price: {cards.actual_price}</p>
            </div>
          </div>
        ))}
      </>
    );

    Card.defaultProps = {
      character: { name: "", image: "" }
    };
  }
}

export default Card;
