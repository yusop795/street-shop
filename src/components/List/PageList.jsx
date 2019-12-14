import React from "react";
import "./list.scss";
import deliver from "../../assets/imgs/deliver.png";

function PageList({ index = 0, shopInfo, rank = false }) {
  return (
    <div className="list_box">
      <div className="list_box_item">
        <a href="#">
          <div className="lsit_icon">
            <img src={deliver} alt="아이콘1" />
          </div>
          공지사항
        </a>
      </div>
      <div className="list_box_item">
        <a href="#">
          <div className="lsit_icon">
            <img src={deliver} alt="아이콘1" />
          </div>
          공지사항
        </a>
      </div>
      <div className="list_box_item">
        <a href="#">
          <div className="lsit_icon">
            <img src={deliver} alt="아이콘1" />
          </div>
          공지사항
        </a>
      </div>
      <div className="list_box_item">
        <a href="#">
          <div className="lsit_icon">
            <img src={deliver} alt="아이콘1" />
          </div>
          공지사항
        </a>
      </div>
      <div className="list_box_item">
        <a href="#">
          <div className="lsit_icon">
            <img src={deliver} alt="아이콘1" />
          </div>
          공지사항
        </a>
      </div>
    </div>
  );
}

export default PageList;
