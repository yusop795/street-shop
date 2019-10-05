import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HeaderNav, BottomNav } from '../components/Nav';

class Shop extends Component {
  render() {
    return (
      <div className="container">
        <HeaderNav />
        <div>ShopScreen</div>
        <BottomNav />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});


export default connect(
  mapStateToProps,
)(Shop);
