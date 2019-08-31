import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

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