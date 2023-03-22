import React from "react";

function TypeMe({ focus, onFocus, onFocusOut }) {
  return (
    <div>
      <input type="text" onFocus={onFocus} onBlur={onFocusOut} />
      {!focus && <p style={{ color: "red" }}>Please type in here!</p>}
    </div>
  );
}

export default TypeMe;
