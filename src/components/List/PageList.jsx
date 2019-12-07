import React from "react";
import "./list.scss";

function PageList({ index = 0, shopInfo, rank = false }) {
  return (
    <li className="list_item">
      <a href="#">
        <div className="list_con">
          {rank ? (
            <div
              className={
                parseInt(index) < 4
                  ? "rank_badge " + `badge_${parseInt(index)}`
                  : "rank_badge"
              }
            ></div>
          ) : null}
          <div className="name">{shopInfo.name}</div>
          {shopInfo.open_now ? (
            <div className="on_now">운영중</div>
          ) : (
            <div className="get_ready_now">준비중</div>
          )}
          <div className="distance">{shopInfo.distance}m</div>
        </div>
      </a>
    </li>
  );
}

export default PageList;
