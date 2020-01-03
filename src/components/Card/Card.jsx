import React, { useState } from "react";
import "./card.scss";
import { useSelector } from "react-redux";

function Card({ content = {}, validation = () => {}, form_status = {} }) {
  // const card = useSelector(state => state.userReducer.form, {});
  // console.log("sss", card);
  // const [value, setValue] = useState(card);

  const [value, setValue] = useState("");
  const updateInputValue = e => {
    setValue({
      value: e.target.value
    });
  };
  console.log("ddd", content);
  return (
    <div className="form_card">
      <div className="form_container">
        <div
          className={`form_item_wrapper ${
            form_status.type === "ERROR" ? "is_error" : ""
          }`}
        >
          <div className="form_direction">{content.text}</div>
          <input
            type="text"
            className="form_textbox_ty1"
            onKeyPress={e => {
              if (e.key === "Enter") {
                console.log("enter key");
                validation({
                  type: content.type,
                  value: value.value
                });

                e.target.value = "";
                setValue({
                  value: ""
                });
              }
            }}
            onChange={updateInputValue}
          />
          <div className="error_text">필수값입니다.</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
