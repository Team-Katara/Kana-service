import React from 'react';

const CurrentProduct = (props) => {

  return (
    <div>
      <div>{props.product.name}</div>
      <img src={props.product.guitarImage} width="100" height="75"/>
      <div>{props.product.Rating}</div>
      <div>{props.product.Price}</div>
      <div>{props.product.Condition}</div>
    </div>
  );
};


export default CurrentProduct;