import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HeaderNav, BottomNav } from '../components/Nav';

const mapStateToProps = (state) => ({
});

class MyPage extends Component {
  render() {
    return (
      <div className="container">
        <HeaderNav />
        <div>MyPage</div>
        <BottomNav />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(MyPage);
