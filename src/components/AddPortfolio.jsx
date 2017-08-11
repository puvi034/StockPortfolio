import React, {Component} from 'react';
import Input from './base/Input.jsx';
import Button from './base/Button.jsx';

class AddPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    symbol: '',
    price: '',
    qty: '',
    date: ''
  }

  onSymbolChange = (val) => {
    this.setState({
      symbol: val
    });
  }

  onPriceChange = (val) => {
    this.setState({
      price: val
    })
  }

  onQtyChange = (val) => {
    this.setState({
      qty: val
    })
  }

  onDateChange = (val) => {
    this.setState({
      date: val
    })
  };


  handleClick = (e) => {
    const {symbol, qty, price, date} = this.state;
    const {getCurrentMarketPrice} = this.props;
    getCurrentMarketPrice(symbol, {
      symbol,
      qty,
      price,
      date
    });
  }

  render() {
    return (<div className="row">
      <div className=" col-sm-offset-2 col-sm-2">
        <Input
          id="Symbol"
          onChange={this.onSymbolChange}
          placeholder="Symbol"
          label="Symbol"
          type="text"
        />
      </div>
      <div className="col-sm-1">
        <Input
          id="Price"
          onChange={this.onPriceChange}
          placeholder="Price"
          label="Price"
          type="number"
          min="0"
        />
      </div>
      <div className="col-sm-2 pad1">
        <Input
          id="qty"
          onChange={this.onQtyChange}
          placeholder="Quantity"
          label="Quantity"
          type="number"
          min="0"
        />
      </div>
      <div className="col-sm-2 pad1">
        <Input
          id="date"
          onChange={this.onDateChange}
          placeholder="DD/MM/YYYY"
          label="Enter Date"
          type="date"
        />
      </div>
      <div className="col-sm-1 pad1">
        <Button
          className="btn-default"
          label="+"
          onClick={this.handleClick}
        />
      </div>
    </div>)
  }
}

export default AddPortfolio;