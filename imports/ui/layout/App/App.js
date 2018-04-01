import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

// Components

// Public

// Authenticated

// Route
import Index from '../../pages/Index/Index';
import NotFound from '../../pages/NotFound/NotFound';

const App = (props) => (
  <Router>
    <div>
      <Switch>
        <Route exact name="index" path="/" component={Index} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

App.defaultProps = {

};

App.propTypes = {

};

export default withTracker(() => {

  return {

  };
})(App);
