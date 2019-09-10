import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  text: state.home.text,
});

class ShopRanking extends Component {
  render() {
    return (
      <div>
        ShopRankingScreen
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ShopRanking);
