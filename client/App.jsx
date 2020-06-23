import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CurrentProduct from './CurrentProduct.jsx';
import FeedList from './FeedList.jsx';

import styled from 'styled-components';


///////////styled components///////////////
// const styledItems = styled.styledItems`
//   background-color: papayawhip;
// `;

// grid-template-rows: 50% 1fr 1fr 1fr  1fr;

const Header = styled.div`
  background-color: papayawhip;
  display: grid;
  grid-template:
    'img'
    'img'
    'img'
    'img'
    'img'
    'img'
    'img'
    'Name'
    'rating'
    'price'
    'condition';
  text-align: center;
  border: 0.5px solid lightgray;
  `;

const Name = styled.div`
  grid-area: Name;
  border: 0.5px solid lightgray;
`;

const Img = styled.div`
  grid-area: img;
  border: 0.5px solid lightgray;
`;
const Rating = styled.div`
  grid-area: rating;
  border: 0.5px solid lightgray;
`;
const Price = styled.div`
  grid-area: price;
  border: 0.5px solid lightgray;
`;
const Condition = styled.div`
  grid-area: condition;
  border: 0.5px solid lightgray;
`;


///////////////////////////////////////////
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similarItems: []
    };

  }

  //get request receives an object with the property 'data' that has the guitar data
  componentDidMount() {
    axios.get('/api/similaritems')
      .then(data => {
        var product = [];
        product.push(data.data);
        return product;
      })
      .then( product => {
        this.setState({
          similarItems: product
        });
      })
      .then( () => {
        this.renderView();
      });
  }


  renderView() {
    if (this.state.similarItems.length) {
      return (
        <div className='similarItems'>
          <Header>
            <Img>  </Img>
            <Name >Name</Name>
            <Rating>Rating</Rating>
            <Price>Price</Price>
            <Condition>Condition</Condition>
          </Header>
          <CurrentProduct product={this.state.similarItems[0][0]} />
          <FeedList similarItems={this.state.similarItems[0].slice(1, 6)}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;