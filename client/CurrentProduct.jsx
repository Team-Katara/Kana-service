import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

///////////styled components///////////////

//grid-template-rows: 35% 1fr 1fr 1fr  1fr 1fr;

const Product = styled.div`
  text-align: center;
  border: 0.5px solid #f3eeee;
  font-size: 10px;
  `;


const Banner = styled.div`
  justify-content: center;

  margin-top: 5%;

`;

const Image = styled.div`
  justify-content: center;
  border-top: 0.5px solid #f3eeee;
  grid-row: 2;
  margin-top: 5%;

`;

const Button = styled.button`
  margin: auto;
  width: 50%;
  border-color: red;
  border: 1px solid red;
  background-color: white;
  margin-bottom: 15px;
  grid-row: 3;
  font-family: montserratregular,Arial,Helvetica,sans-serif;
  font-size: 10px;
`;

const Name = styled.div`
  border: 1px solid #f3eeee;
  background-color: lightgray;
  grid-row: 4;
`;


const Rating = styled.div`
  grid-row: 5;
  border: 0.5px solid #f3eeee;
`;
const Price = styled.div`
  grid-row: 6;
  border: 0.5px solid #f3eeee;
`;
const Condition = styled.div`
  grid-row: 7;
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
        <Banner>CurrentProduct</Banner>
        <Image>
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
        </Rating>
        <Price>{this.props.product.Price}</Price>
        <Condition>{this.props.product.Condition}</Condition>
      </Product>


    );
  }
}


export default CurrentProduct;