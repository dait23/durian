



import {  Link } from 'react-router-dom';
import React, { Component } from 'react';



class Profile extends Component {
  render() {
    return (
      <div>
      <div className="navbar">
        <Link to="/">Feed</Link>
        <Link to="/profile">Profile</Link>
      </div>
    <p className="page-info">
      This is the profile page.
    </p>
    </div>
    );
  }
}

export default Profile;
