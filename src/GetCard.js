import React, { Component } from 'react';

class GetCard extends Component {
  render() {
    return (
      <div className="get-card">
        <div className="wrapper-title">
          <h1 className="title-card center">Getting The Card</h1>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col l4 center">
              <i className="material-icons big-icon">assignment</i>
              <h2 className="tag-card">Submit Application</h2>
              <p className="text-card">Selvage unicorn meditation, swag synth fixie salvia microdosing</p>
            </div>

            <div className="col l4 center">
              <i className="material-icons big-icon">done</i>
              <h2 className="tag-card">Get an approval</h2>
              <p className="text-card">Selvage unicorn meditation, swag synth fixie salvia microdosing</p>
            </div>

            <div className="col l4 center">
              <i className="material-icons big-icon">credit_card</i>
              <h2 className="tag-card">Card Delivery</h2>
              <p className="text-card">Selvage unicorn meditation, swag synth fixie salvia microdosing</p>
            </div>
          </div>

          <div className="wrapper-btn-fab center">
            <a data-scroll className="btn-floating btn-fab-down z-depth-0" href="#abilities"><i className="material-icons">arrow_downward</i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default GetCard;
