import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

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