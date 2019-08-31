import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RankList, FavoriteList } from '../components/List'

function mapStateToProps(state) {
    return {

    };
}

class Home extends Component {
    render() {
        return (
            <div>
                <FavoriteList/>
                <RankList/>
                HomeScreen
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);