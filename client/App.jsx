import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/api/similaritems')
      .then(data => {

      });
  }



  render() {
    return (
      <div>
        <div>Current Product</div>
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
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default App;