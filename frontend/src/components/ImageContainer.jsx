import React from "react";
import downloadImg from "../utility/downloadImg";
import DownloadBtn from "./DownloadBtn";
import Image from "./Image";

function ImageContainer({ imgUrl }) {
  return (
    <div
      //  Only display container if imgUrl prop is not null
      className={
        imgUrl === null
          ? "hidden"
          : "bg-gray-400 flex flex-col items-center py-2 shadow-md"
      }
    >
      {/* Display image with the Image component */}
      <Image imageUrl={imgUrl} />

      {/* Display download button with the DownloadBtn component */}
      <DownloadBtn downloadImage={() => downloadImg(imgUrl)} />
    </div>
  );
}

export default ImageContainer;
