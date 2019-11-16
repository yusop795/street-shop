import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderNav, BottomNav } from '../components/Nav';
import { ShopList } from '../components/List';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // shop: this.props.shop,
    };
  }

  render() {
    return (
      <div className='container'>
        <HeaderNav left={'<'} title='BEST SHOP' right={false} />
        <div className='content_wrap'>
          <ul className='ranking_list'>
            {/* {this.state.shop.map((data, i) => {
              return <ShopList key={i} shopInfo={data} rank index={i + 1} />;
            })} */}
          </ul>
        </div>
        <BottomNav />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
