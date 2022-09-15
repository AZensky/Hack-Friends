import React from "react";

function AccessMessage({ isHacked }) {
  return (
    <div id="access-msg" className={isHacked ? "success" : "denied"}>
      {isHacked ? "Access Granted" : "Access Denied"}
      <span className="msg-sub-head">(Press Esc)</span>
    </div>
  );
}

export default AccessMessage;
