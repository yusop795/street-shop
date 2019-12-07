import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({});

class SignUp extends Component {
  render() {
    return (
      <div className="common_container bg_deco">
        <div className="form_card">
          <div className="form_container">
            <div className="form_item_wrapper">
              <div className="form_direction">성별을 알려주세요 !</div>
              <input type="text" className="form_textbox_ty1" />
              <div className="error_text">필수값입니다.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SignUp);
