import React from 'react';
import styled from 'styled-components';

///////////styled components///////////////
// const styledItems = styled.styledItems`
//   background-color: papayawhip;
// `;

const Product = styled.div`
  background-color: palevioletred;
  display: grid;
  grid-template-rows: 35% 1fr 1fr 1fr  1fr 1fr;
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
  margin-bottom: 15px;
`;

///////////////////////////////////////////

class CurrentProduct extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      button: 'Add to Cart'
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    if (this.state.button === 'Add to Cart') {
      this.setState ({
        button: 'Added to Cart'
      });
    } else {
      this.setState ({
        button: 'Add to Cart'
      });
    }
  }

  render() {
    return (
      <div className='item2'>
        <Product>
          <Image>
            <img src={this.props.product.guitarImage} width="100" height="75"/>
          </Image>
          <Button onClick={this.handleClick}>{this.state.button}</Button>
          <div>{this.props.product.name}</div>
          <div>{this.props.product.Ratings}</div>
          <div>{this.props.product.Price}</div>
          <div>{this.props.product.Condition}</div>
        </Product>
      </div>
    );
  }
}


export default CurrentProduct;