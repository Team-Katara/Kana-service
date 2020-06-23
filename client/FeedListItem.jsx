import React from 'react';
import styled from 'styled-components';

///////////styled components///////////////
const Product = styled.div`
  background-color: papayawhip;
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

class FeedListItem extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <Product>
        <Image>
          <img src={this.props.item.guitarImage} width="100" height="75"/>
        </Image>
        <Button> Add to Cart</Button>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.Ratings}</div>
        <div>{this.props.item.Price}</div>
        <div>{this.props.item.Condition}</div>
      </Product>
    );
  }
}

export default FeedListItem;