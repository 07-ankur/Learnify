import React from "react";
import "./Auth_btn.css";

export default function Auth_btn({ label, functionHandler, type }) {
  return (
    <button onClick={functionHandler} className="button-36" type={type}>
      {label}
    </button>
  );
}
