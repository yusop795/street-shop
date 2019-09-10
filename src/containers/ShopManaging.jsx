import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  text: state.home.text,
});

class ShopManaging extends Component {
  render() {
    return <div>ShopManagingScreen</div>;
  }
}

export default connect(mapStateToProps)(ShopManaging);
