
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testActions } from '../actions/test';
import { RankList, FavoriteList } from '../components/List';

const mapStateToProps = (state) => ({
  text: state.homeReducer.text,
});

const mapDispatchToProps = (dispatch) => ({
  getTest: (text) => dispatch(testActions.getTest(text)),
  setTest: (text) => dispatch(testActions.setTest(text)),
});

class Home extends Component {
  componentDidMount() {
    this.props.getTest('hoho');
  }

  setTest = (text) => {
    // console.log(this.state.text, this.state.input);
    console.log(this.props.text);
    this.props.setTest(text);
  };

  render() {
    return (
      <div>
        <input
          onChange={({ target }) => {
            this.setTest(target.value);
          }}
        />
        <FavoriteList title="좋아요" type="FavoriteList" getTest={this.setTest} text={this.props.text} />
        <RankList />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
