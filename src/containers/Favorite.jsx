import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderNav, BottomNav } from '../components/Nav';

const mapStateToProps = (state) => ({
});

class Favorite extends Component {
  state = {
  };

  render() {
    return (
      <div className="container">
        <HeaderNav />
        <div>dqdqwdqwd FavoriteScreen</div>
        <BottomNav />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Favorite);
