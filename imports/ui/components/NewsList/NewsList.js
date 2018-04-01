import React from 'react';
import PropTypes from 'prop-types';
import { withTracker} from 'meteor/react-meteor-data';

import { News } from '../../../api/News/news';

import NewsListItem from '../../components/NewsListItem/NewsListItem';

const NewsList = ({ loading, news, history}) => {
  if (loading) {
    if ( news.length === 0 ) {
      return (
        <div>
          No news added yet !
        </div>
      );
    }
    return (
      <div>
        { news.map((newsItem) =>
          <NewsListItem
            key={newsItem._id}
            {...newsItem}
          />
        )}
      </div>
    );
  } else {
    return (
      <div>
        Data missing!
      </div>
    );
  }
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('news');
  return {
    loading: subscription.ready(),
    news: News.find({}, {skip:0, limit:5, sort: {createdAt: -1}}).fetch(),
  }
})(NewsList);
