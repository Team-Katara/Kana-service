import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

///////////styled components///////////////

const Banner = styled.div`
  grid-row: 1;
  background-color: white;
  border-top: 1px solid #f3eeee;
  border-right: 1px solid #f3eeee;
  `;

const Image = styled.div`
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-right: 1px solid #f3eeee;
`;

const Wrapper = styled.div`
    border-right: 1px solid #f3eeee;
    grid-row: 3;
`;

const Button = styled.button`
    display: flex;
    margin: auto;
    grid-row: 3;
    width: 35%;
    border-color: red;
    border: 1px solid red;
    background-color: white;
    font-family: montserratregular,Arial,Helvetica,sans-serif;
    font-size: 12px;
  `;

const Name = styled.div`
  border: 1px solid #f3eeee;
  background-color: #f8f8f8;
  grid-row: 4;
  display: flex;
  text-align: center;
  align-items: center;
`;

const Rating = styled.div`
  grid-row: 5;
  border: 0.5px solid #f3eeee;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;;

  &: hover {
    color: red;
  }
`;
const Price = styled.div`
  grid-row: 6;
  border: 0.5px solid #f3eeee;
  color: red;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Condition = styled.div`
  grid-row: 7;
  border: 0.5px solid #f3eeee;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;;
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
        <Wrapper>
          <Button onClick={this.handleClick}>{this.state.button}</Button>
        </Wrapper>
        <Name>{this.props.item.name}</Name>
        <Rating>
          <StarRatings
            rating={Number(this.props.item.Ratings)}
            starRatedColor=	'#ffb400'
            nnumberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          />
          ({this.props.item.ReviewCount})
        </Rating>
        <Price>{this.props.item.Price}</Price>
        <Condition>{this.props.item.Condition}</Condition>
      </React.Fragment>
    );
  }
}

export default FeedListItem;