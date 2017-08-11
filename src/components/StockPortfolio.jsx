import React, {Component} from 'react';
import PortfolioHeader from './PortfolioHeader.jsx';
import AddPortportfolio from './AddPortfolio.jsx';
import DisplayStock from './DisplayStock.jsx';
import axios from 'axios';

class StockPortfolio extends Component {

  state = {
    stockList: []
  };

  getCurrentMarketPrice = (symbol, addStock) => {
    const url = 'http://finance.google.com/finance/info';
    let fullUrl = `${url}?q=NASDAQ:${symbol}`;
    const {stockList} = this.state;
    axios.get(fullUrl).then((res) => {
     const data = JSON.parse(res.data.replace("//",''))[0];
     const {l_cur: curPrice} = data;
      this.setState({
        stockList:[...stockList, {...addStock, curPrice}]
      })
    })
  };

  deleteStock = (id) => {
    const {stockList} = this.state;
    const newStockList = stockList.filter((v, i) => i !== id);
    this.setState({
      stockList: newStockList
    })
  };

  render() {
    const {stockList} = this.state;
    return (
      <div className="container">
        <PortfolioHeader header="Portfolio" />
        <AddPortportfolio getCurrentMarketPrice={this.getCurrentMarketPrice} />
        <DisplayStock stockList = {stockList} onDelete = {this.deleteStock}/>
      </div>
    )
  }
};

export default StockPortfolio;