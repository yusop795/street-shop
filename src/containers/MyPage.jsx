import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  text: state.home.text,
});

class MyPage extends Component {
  render() {
    return (
      <div>
        MypageScreen
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(MyPage);
