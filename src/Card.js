import React, { Component } from 'react';
import BgCard from './Assets/img/card_w_bg.png';

class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-abilities" id="abilities">
          <div className="row">
            <div className="col l4">
              <h1 className="title-abilities">Card Abilities</h1>
              <ul className="list-abilities">
                <li>
                  <h4>Gochujang tofu asymmetrical</h4>
                </li>
                <li>
                  <h4>Put a bird on it viral bushwick</h4>
                </li>
                <li>
                  <h4>Organic plaid slow-carb sustainable </h4>
                </li>
              </ul>
            </div>
            <div className="col l7 offset-l1 m7 offset-m1 s12">
              <img src={BgCard} className="responsive-img" alt="Card" />
            </div>
            <div className="col l12 m12 s12 center">
              <a href="#!" className="btn btn-primary">get started</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
