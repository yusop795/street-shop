import React, { Component } from "react";
import { connect } from "react-redux";
import { testActions } from "../actions/test";

import { HeaderNav, BottomNav } from "../components/Nav";
import { MainMap } from "../components/Map";
class Home extends Component {
  componentDidMount() {
    this.props.getTest("hoho");
  }

  setTest = text => {
    // console.log(this.state.text, this.state.input);
    console.log(this.props.text);
    this.props.setTest(text);
  };

  render() {
    return (
      <div className="container">
        <HeaderNav left={false} title=" HOME" right={false} />
        <MainMap />
        <BottomNav />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.homeReducer.text,
  shop: state.homeReducer.shop
});

const mapDispatchToProps = dispatch => ({
  getTest: text => dispatch(testActions.getTest(text)),
  setTest: text => dispatch(testActions.setTest(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
