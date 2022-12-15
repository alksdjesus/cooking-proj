import React from "react";
import ReactLoading from "react-loading";
  
export default function Loading() {
  return (
    <div>
      <h2>Loading...</h2>
      <ReactLoading type="spin" color="orange"
        height={100} width={50} />
    </div>
  );
}