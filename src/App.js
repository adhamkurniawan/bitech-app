import React, { Component } from 'react';
import Navbar from './Navbar';
import Benefit from './Benefit';
import GetCard from './GetCard';
import Card from './Card';
import Footer from './Footer';
import './Assets/css/materialize.css';
import './Assets/css/master.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Benefit />
        <GetCard />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
