import React from 'react';
import PropTypes from 'prop-types';
import { withTracker} from 'meteor/react-meteor-data';

const NewsListItem = ({ _id, title, text}) => {
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ text.slice(0, 15) }…</h5>

        {/* <button onClick={() => Meteor.call('news.remove', _id)}>Delete</button> */}
      </div>
    );
}

NewsListItem.propTypes = {
  newsItem: PropTypes.object,
};

export default NewsListItem;
