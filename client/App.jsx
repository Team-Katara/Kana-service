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


// const Items = styled.div`
//   grid-column: ;
//   grid-template-rows: 15px 150px 15px 30px 15px 15px 15px;
// }`;

const Header = styled.div`
  grid-row: 1 / 4;
  text-align: center;
  border: 0.5px solid #f3eeee;
  `;

const Name = styled.div`
  grid-row: 4;
  border: 0.5px solid #f3eeee;
  background-color: lightgray;
  font-size: 10px;
`;


const Rating = styled.div`
  grid-row: 5;
  border: 0.5px solid #f3eeee;
  font-size: 10px;
`;
const Price = styled.div`
  grid-row: 6;
  border: 0.5px solid #f3eeee;
  background-color: lightgray;
  font-size: 10px;
`;
const Condition = styled.div`
  grid-row: 7;
  border: 0.5px solid #f3eeee;
  font-size: 10px;
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
        <div className='similarItems'>
          {/* <Items> */}
          <Header>
            {/* <Img>  </Img> */}
          </Header>
          <Name >Name</Name>
          <Rating>Rating</Rating>
          <Price>Price</Price>
          <Condition>Condition</Condition>
          {/* </Items> */}
          {/* <div className='CurrentItem'> */}
            <CurrentProduct product={this.state.similarItems[0][0]} />
          {/* </div> */}
          <div className='FeedList'>
            <FeedList similarItems={this.state.similarItems[0].slice(1, 6)}/>
          </div>
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