import React from 'react';

import NewsAdd from '../../components/NewsAdd/NewsAdd';
import NewsList from '../../components/NewsList/NewsList';

class Index extends React.Component {
  render () {
    return (
      <div>
        <NewsAdd />

        <NewsList />
      </div>
    );
  }
}

export default Index;
