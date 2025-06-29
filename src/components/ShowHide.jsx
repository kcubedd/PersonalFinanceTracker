import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Details
      </button>
      {show && (
        <p>
          This is the hidden paragraph. Click again to hide it.
        </p>
      )}
    </div>
  );
};

export default ShowHide;
