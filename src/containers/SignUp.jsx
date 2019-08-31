import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

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