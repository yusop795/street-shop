import React, { Component } from "react";
import { connect } from "react-redux";

import { HeaderNav, BottomNav } from "../components/Nav";
import { PageList } from "../components/List";

const mapStateToProps = state => ({});

class MyPage extends Component {
  render() {
    return (
      <div className="container">
        <HeaderNav left={false} title="My Page" right={false} />
        <div className="content_wrap">
          <div className="content_top_logo"></div>
          <div className="not_login">
            <div className="inner_wrap">
              <button className="kakao_login" type="button">
                카카오 로그인
              </button>
              <a href="#" className="link_to">
                잠깐! 혹시 사장님이신가요?
              </a>
            </div>
          </div>
          <PageList />
          <div className="footer">
            <button type="button">로그아웃</button>
            <div>Version 1.1.9</div>
            <div>Copyright MAD TM All Right Reserved</div>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default connect(mapStateToProps)(MyPage);
