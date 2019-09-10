import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  text: state.home.text,
});

class SignIn extends Component {
  render() {
    return (
      <div>
        SignInScreen
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(SignIn);
