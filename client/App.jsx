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



const GridLayout = styled.div`
  && {
      background-color: red;

        .Banner {
          grid-row: 1
        }

        .Img {
          grid-row: 2;
          border: 0.5px solid #f3eeee;
        }

        .Name {
          grid-row: 4;
          border: 0.5px solid #f3eeee;
          background-color: lightgray;
        }

        .Rating {
          grid-row: 5;
          border: 0.5px solid #f3eeee;
        }

        .Price {
          grid-row: 6;
          border: 0.5px solid #f3eeee;
          background-color: lightgray;
        }

        .Condition {
          grid-row: 7;
          border: 0.5px solid #f3eeee;
        }

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
        <div className='container'>
          <GridLayout className='similarItems'>
            <GridLayout className='Banner'/>
            <GridLayout className='Img' />
            <GridLayout className='Name' >Name</GridLayout>
            <GridLayout className='Rating'>Rating</GridLayout>
            <GridLayout className='Price'>Price</GridLayout>
            <GridLayout className='Condition'>Condition</GridLayout>
            <CurrentProduct className='similarItems' product={this.state.similarItems[0][0]} />
            <FeedList similarItems={this.state.similarItems[0].slice(1, 6)}/>
          </GridLayout>
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