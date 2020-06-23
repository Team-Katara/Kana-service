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

const MyComponent = styled.div`
  background-color: papayawhip;
  display: grid;
  grid-template-rows: 50% 1fr 1fr 1fr  1fr;
  grid-gap: 1px;
  text-align: center;
  border: 1px solid lightgray;

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
          <MyComponent>
            <div>  </div>
            <div >Name</div>
            <div>Rating</div>
            <div>Price</div>
            <div>Condition</div>
          </MyComponent>
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