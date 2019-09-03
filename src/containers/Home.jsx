import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from "../actions";
import { RankList, FavoriteList } from '../components/List'

const mapStateToProps = (state) => {
    return {
        text: state.text,
    };
}

const mapDispatchToProps = dispatch => ({
    getTest: text => dispatch(testAction.getTest(text)),
});

class Home extends Component {
    state = {
        text:'',
    }

    getTest = (text) => {
        this.props.getTest('aaaa')
    }

    render() {
        return (
            <div>
                <FavoriteList title="좋아요" type="FavoriteList" getTest={this.getTest} text={this.props.text}/>
                <RankList/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);