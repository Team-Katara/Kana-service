import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CurrentProduct from './CurrentProduct.jsx';
import FeedList from './FeedList.jsx';

import styled from 'styled-components';


///////////styled components///////////////

const Banner = styled.div`
  grid-row: 1
`;

const Image = styled.div`
  grid-row: 2;
`;

const Placeholder = styled.div`
  grid-row: 3;
`;

const Name = styled.div`
  grid-row: 4;
  border: 0.5px solid #f3eeee;
  background-color: lightgray;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rating = styled.div`
  grid-row: 5;
  border: 0.5px solid #f3eeee;
  background-color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.div`
  grid-row: 6;
  border: 0.5px solid #f3eeee;
  background-color: lightgray;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Condition = styled.div`
  grid-row: 7;
  border: 0.5px solid #f3eeee;
  background-color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
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
      })
      .catch(err => (err));
  }


  renderView() {
    if (this.state.similarItems.length) {
      return (
        <div className='similarItems' id='container'>
          <Banner/>
          <Image/>
          <Placeholder/>
          <Name>Name</Name>
          <Rating >Rating</Rating>
          <Price >Price</Price>
          <Condition>Condition</Condition>
          <CurrentProduct className='similarItems' product={this.state.similarItems[0][0]} />
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