import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  text: state.home.text,
});

class Shop extends Component {
  render() {
    return (
      <div>
        ShopScreen
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Shop);
