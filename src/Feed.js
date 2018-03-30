



import {  Link } from 'react-router-dom';
import React, { Component } from 'react';



class Feed extends Component {
  render() {
    return (
      <div>
      <div className="navbar">
        <Link to="/">Feed</Link>
        <Link to="/profile">Profile</Link>
      </div>
    <p className="page-info">
      This is the feed page.
    </p>
    </div>
    );
  }
}

export default Feed;
