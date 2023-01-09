import React from "react";

function Image({ imageUrl }) {
  return (
    <>
      {/* Display image with the src attribute set to the imageUrl prop */}
      <img src={imageUrl} className={"w-96 shadow-md rounded-md"} />
    </>
  );
}

export default Image;
