import React from 'react';

class FeedListItem extends React.Component {
  constructor (props) {
    super (props);
    console.log(props)
  }

  render () {
    return (
      <div>
        <p>{this.props.item.name}</p>
        <img src={this.props.item.guitarImage} width="100" height="75"/>
        <p>{this.props.item.Rating}</p>
        <p>{this.props.item.Price}</p>
        <p>{this.props.item.Condition}</p>
      </div>
    );
  }
}

export default FeedListItem;