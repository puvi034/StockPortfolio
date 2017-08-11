import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import StockPortfolio from './components/StockPortfolio.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
        <StockPortfolio />
    );
  }
}

export default App;
