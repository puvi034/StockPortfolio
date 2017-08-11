import React, {Component} from 'react';
import axios from 'axios';
import classnames from 'classnames';
import Button from './base/Button.jsx';

const DispayStock = ({stockList, onDelete}) => {

  const list = stockList.map(({symbol='', qty=1,price=0,date, curPrice}, i) => {
    return (<div key={i} className="row">
      <div className="col-xs-12">
        <h2>{`${symbol} / ${qty}*$${price} = $${qty * price} / ${date}`}</h2>
      </div>
      <div className="col-xs-12">
        <h1
          className={classnames({'profit': (curPrice-price)*qty >= 0},
           {'loss': (curPrice-price)*qty < 0}, {'col-xs-10': true})}>
          {`${curPrice} / $${(curPrice-price)*qty}`}
        </h1>
        <Button className=" col-xs-1 pull-right" onClick = {() => onDelete(i)} label="-" className="btn-danger" />
      </div>
    </div>)
  });
  return(
    <div className="row">
      <div className=" col-sm-offset-2 col-sm-8">
        {list}
      </div>
    </div>
  )
};

export default DispayStock;