import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "../components/Card";

import { userAction, userTypes } from "../reducers/userReducer";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_type: this.props.form.current_show,
      card_index: ["name", "age", "gender"],
      current_form: {
        type: "",
        text: ""
      }
    };
  }
  checkForm = returnValue => {
    if (returnValue) {
      // console.log("ddd", returnValue);
      this.props.actionReducerCall({
        type: userTypes.SELECT_USER,
        next: this.state.card_index[0],
        value: {
          type: returnValue.type,
          value: returnValue.value
        }
      });
    }
  };
  componentDidMount() {
    const reset_index = this.state.card_index.slice(1);
    // console.log("did", reset_index);
    const current_content = this.props.form.content.filter(
      v => v.type === this.state.current_type
    );
    console.log("1. current_cotnet", current_content);
    this.setState({
      card_index: reset_index,
      current_form: current_content[0]
    });
  }
  setCardReset() {
    // console.log("fffff시작");
    const reset_index = this.state.card_index.slice(1);
    // console.log("did", reset_index);
    const current_content = this.props.form.content.filter(
      v => v.type === this.props.form.current_show
    );
    console.log("2. current_cotnet", current_content);
    this.setState({
      card_index: reset_index,
      current_form: current_content[0]
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.form.current_show !== prevProps.form.current_show) {
      console.log("state update!");
      this.setState({
        current_type: this.props.form.current_show
      });
      this.setCardReset();
    }
  }
  render() {
    console.log("2 signup", this.state, this.props.form);
    return (
      <div className="common_container bg_deco">
        {this.state.current_type === undefined ? (
          "끝임"
        ) : (
          <Card
            content={this.state.current_form}
            validation={this.checkForm}
            form_status={this.props.form.validation}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  // location: homeReducer.location,
  users: userReducer.user,
  form: userReducer.form
});

// const mapDispatchToProps = dispatch => ({
//   // fetchMapSaga: location => dispatch(homeActions.fetchMap(location))
//   validationFormSaga: value => dispatch(userAction.selectUser(value))
// });
const mapDispatchToProps = dispatch => ({
  // changeColor: color => dispatch(changeColor(color)),
  actionReducerCall: function(v) {
    return dispatch(v);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
