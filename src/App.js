import React, { Component } from 'react';
//import { Router, browserHistory, Route, Link } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Loading from './Loading';
import Loadable from 'react-loadable';
import fakeDelay from './fakeDelay';




const Feed = Loadable({
 loader: () => fakeDelay(500).then(() => import('./Feed')),
  loading: Loading,
  timeout: 10000, // 10 seconds
 // serverSideRequirePath: path.resolve(__dirname, './Feed')
});


const Profile = Loadable({
  loader: () => fakeDelay(500).then(() => import('./Profile')),
  loading: Loading,
  timeout: 10000, // 10 seconds
  //serverSideRequirePath: path.resolve(__dirname, './Profile')
});


class App extends Component {
  render() {
    return (
 
      <Router>
        <Switch>
          <Route exact path="/" component={Feed}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </Router>
    );
  }
}
export default App;