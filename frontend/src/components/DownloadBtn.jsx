import React from "react";

function DownloadBtn({ downloadImage }) {
  return (
    <>
      {/* This button triggers the downloadImage function when clicked */}
      <button
        onClick={downloadImage}
        className="mt-1  bg-zinc-800 hover:bg-gray-700 text-[#ff0] font-bold py-2 px-4 rounded inline-flex items-center shadow-md"
      >
        {/* This is the download icon */}
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>

        {/* This is the download text */}
        <span className="text-[#ff0]">Download</span>
      </button>
    </>
  );
}

export default DownloadBtn;
