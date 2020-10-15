import React from "react";
import "./style.css";

function CheckMark(props) {
  return props.rendered ? (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100.2 100.2"
    >
      <circle
        className="path circle"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="35.1"
        cy="35.1"
        r="22.1"
      />
      <polyline
        className="path check"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="25,35 35.1,45.1 46.5,23.5 "
      />
    </svg>
  ) : null;
}

export default CheckMark;
