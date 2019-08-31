import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class MyPage extends Component {
    render() {
        return (
            <div>
                MypageScreen
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(MyPage);