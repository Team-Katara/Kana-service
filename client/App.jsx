import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CurrentProduct from './CurrentProduct.jsx';
import FeedList from './FeedList.jsx';

import styled from 'styled-components';


///////////styled components///////////////
//borderline color #f3eeee

const Banner = styled.div`
  grid-row: 1;
  background-color: white;
  border-top: 1px solid #f3eeee;
  border-left: 1px solid #f3eeee;
  border-right: 1px solid #f3eeee;
`;

const Image = styled.div`
  grid-row: 2;
  background-color: white;
  border-left: 1px solid #f3eeee;
  border-right: 1px solid #f3eeee;
`;

const Placeholder = styled.div`
  grid-row: 3;
  background-color: white;
  border-left: 1px solid #f3eeee;
  border-right: 1px solid #f3eeee;
`;

const Name = styled.div`
  grid-row: 4;
  background-color: lightgray;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f3eeee;
  border-left: 1px solid #f3eeee;
  border-right: 1px solid #f3eeee;
`;

const Rating = styled.div`
  grid-row: 5;
  background-color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f3eeee;
  border-left: 1px solid #f3eeee;
  border-right: 1px solid #f3eeee;
`;

const Price = styled.div`
  grid-row: 6;
  background-color: lightgray;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f3eeee;
  border-left: 1px solid #f3eeee;
  border-right: 1px solid #f3eeee;
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
    var urlParams = new URLSearchParams(window.location.search.substring(1));
    var params = urlParams.get('id');

    axios.get('/api/similaritems/?id=' + params)
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
        console.log('render invoked')
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
    } else {
      return null;
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