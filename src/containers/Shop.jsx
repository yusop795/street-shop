import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

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