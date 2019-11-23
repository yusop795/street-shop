/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import { connect } from "react-redux";
import { HeaderNav, BottomNav } from "../components/Nav";
import { ShopList } from "../components/List";
import { shopAction } from "../reducers/shopReducer";

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

const mapStateToProps = ({ shopReducer }) => ({
  shop: shopReducer.shop
});

const mapDispatchToProps = dispatch => ({
  fetchShop: () => dispatch(shopAction.fetchShop()),
  updateShop: shopInfo => dispatch(shopAction.updateShop(shopInfo)),
  createShop: () => dispatch(shopAction.createShop()),
  deleteShop: id => dispatch(shopAction.deleteShop(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
