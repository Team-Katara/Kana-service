import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CurrentProduct from './CurrentProduct.jsx';
import FeedList from './FeedList.jsx';

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
        <div>
          {console.log(this.state.similarItems[0][0])}
          <CurrentProduct product={this.state.similarItems[0][0]} />
          <FeedList similarItems={this.state.similarItems[0].slice(1)}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}

        {/* <div>Current Product</div>
        <img src={this.photo}></img>
        <button>Add to Cart</button>
        <p></p>
        <div>Similar Item 1</div>
        <button>Add to Cart</button>
        <div>Similar Item 2</div>
        <button>Add to Cart</button>
        <div>Similar Item 3</div>
        <button>Add to Cart</button>
        <div>Similar Item 4</div>
        <button>Add to Cart</button>
        <div>Similar Item 5</div>
        <button>Add to Cart</button> */}
      </div>
    );
  }
}

export default App;