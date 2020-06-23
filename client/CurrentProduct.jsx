import React from 'react';
import styled from 'styled-components';

///////////styled components///////////////
// const styledItems = styled.styledItems`
//   background-color: papayawhip;
// `;

const Product = styled.div`
  background-color: palevioletred;
  display: grid;
  grid-template-rows: 40% 1fr 1fr 1fr  1fr 1fr;
  text-align: center;
  border: 1px solid lightgray
  `;

const Image = styled.div`
  justify-content: center;
  margin-top: 10%
`;

const Button = styled.button`
  margin: auto;
  width: 30%;
  border-color: red;
  border: 1px solid red;
  background-color: white;
`;

///////////////////////////////////////////

const CurrentProduct = (props) => {

  return (
    <div className='item2'>
      <Product>
        <Image>
          <img src={props.product.guitarImage} width="100" height="75"/>
        </Image>
        <Button>
          <span>Add to</span>
          <span> Cart</span>
        </Button>
        <div>{props.product.name}</div>
        <div>{props.product.Ratings}</div>
        <div>{props.product.Price}</div>
        <div>{props.product.Condition}</div>
      </Product>
    </div>
  );
};


export default CurrentProduct;