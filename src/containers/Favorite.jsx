import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Favorite extends Component {
    render() {
        return (
            <div>
                FavoriteScreen
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Favorite);