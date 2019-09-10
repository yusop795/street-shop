import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  text: state.text,
});

class Favorite extends Component {
  state = {
    text: '1',
  };

  render() {
    const { text } = this.state;
    console.log(text);
    return <div>dqdqwdqwd FavoriteScreen</div>;
  }
}

export default connect(mapStateToProps)(Favorite);
