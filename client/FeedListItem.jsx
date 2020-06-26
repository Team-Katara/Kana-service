import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

///////////styled components///////////////

const Banner = styled.div`
  grid-row: 1;
  margin: auto;
  `;

const Image = styled.div`
  grid-row: 2;
  margin: auto;
  margin-top: 5%;
`;

const Button = styled.button`
    margin: auto;
    grid-row: 3;
    width: 50%;
    border-color: red;
    border: 1px solid red;
    background-color: white;
    margin-bottom: 15px;
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

  &: hover {
    color: red;
  }
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

class FeedListItem extends React.Component {
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

  render () {
    return (
      <React.Fragment>
        <Banner />
        <Image>
          <img src={this.props.item.guitarImage} width="100" height="75"/>
        </Image>
        <Button onClick={this.handleClick}>{this.state.button}</Button>
        <Name>{this.props.item.name}</Name>
        <Rating>
          <StarRatings
            rating={Number(this.props.item.Ratings)}
            starRatedColor=	'#ffb400'
            nnumberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          />
          ({this.props.item.Ratings})
        </Rating>
        <Price>{this.props.item.Price}</Price>
        <Condition>{this.props.item.Condition}</Condition>
      </React.Fragment>
    );
  }
}

export default FeedListItem;