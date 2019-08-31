import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class ShopManaging extends Component {
    render() {
        return (
            <div>
                ShopManagingScreen
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ShopManaging);