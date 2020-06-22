import React from 'react';
import FeedListItem from './FeedListItem.jsx';

const FeedList = (props => {
  return props.similarItems.map ( (item, index) =>
    <FeedListItem key={index} item={item}/>
  );
});

export default FeedList;