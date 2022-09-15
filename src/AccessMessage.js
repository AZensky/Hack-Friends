import React from "react";

function AccessMessage({ isHacked }) {
  return (
    <div id="access-msg" className={isHacked ? "success" : "denied"}>
      {isHacked ? "Access Granted" : "Access Denied"}
    </div>
  );
}

export default AccessMessage;
