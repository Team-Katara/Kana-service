import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

///////////styled components///////////////

//grid-template-rows: 35% 1fr 1fr 1fr  1fr 1fr;

const Product = styled.div`
  background-color: palevioletred;
  text-align: center;
  border: 0.5px solid #f3eeee;
  font-family: montserratregular,Arial,Helvetica,sans-serif;
  font-size: 10px;
  `;


const Image = styled.div`
  justify-content: center;
  grid-area: img;
  margin-top: 5%;

`;

const Name = styled.div`
  border: 1px solid #f3eeee;
  background-color: lightgray;
  grid-area: Name;
`;

const Button = styled.button`
  margin: auto;
  width: 50%;
  border-color: red;
  border: 1px solid red;
  background-color: white;
  margin-bottom: 15px;
  grid-area: Button;
  font-family: montserratregular,Arial,Helvetica,sans-serif;
  font-size: 10px;
`;

const Rating = styled.div`
  grid-area: rating;
  border: 0.5px solid #f3eeee;

  &: hover {
    color: red;
  }
`;
const Price = styled.div`
  grid-area: price;
  border: 0.5px solid #f3eeee;
`;
const Condition = styled.div`
  grid-area: condition;
  border: 0.5px solid #f3eeee;
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
      <Product>
        <Image>
          <span>CurrentProduct</span>
          <img src={this.props.product.guitarImage} width="100" height="75"/>
        </Image>
        <Button onClick={this.handleClick}>{this.state.button}</Button>
        <Name>{this.props.product.name}</Name>
        <Rating>
          <StarRatings
            rating={Number(this.props.product.Ratings)}
            starRatedColor=	'#ffb400'
            nnumberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          />
          ({this.props.product.Ratings})
        </Rating>
        <Price>{this.props.product.Price}</Price>
        <Condition>{this.props.product.Condition}</Condition>
      </Product>
    );
  }
}


export default CurrentProduct;