import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  text: state.home.text,
});

class SignUp extends Component {
  render() {
    return (
      <div>
        SignupScreen
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(SignUp);
