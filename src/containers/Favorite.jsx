import React, { Component, useReducer } from "react";
import { connect } from "react-redux";
import { testActions } from "../actions/test";
import { HeaderNav, BottomNav } from "../components/Nav";
import { ShopList } from "../components/List";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: this.props.shop
    };
  }
  render() {
    return (
      <div className="container">
        <HeaderNav left={"<"} title="FAVORITE LIST" right={false} />
        <div className="content_wrap">
          <ul className="favorite_list">
            {this.state.shop.map((data, i) => {
              return <ShopList key={i} shopInfo={data} />;
            })}
          </ul>
        </div>
        <BottomNav />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.homeReducer.text,
  shop: state.shopReducer.shop
});

const mapDispatchToProps = dispatch => ({
  getTest: text => dispatch(testActions.getTest(text)),
  setTest: text => dispatch(testActions.setTest(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
