import React from "react";

function CountHeader({ count }) {
  console.log("countHeader 랜더링");
  return <h1>{count}</h1>;
}

export default CountHeader;
