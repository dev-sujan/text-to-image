import React from "react";

// This function returns a button element that triggers the generateHandler function when clicked
function GenerateBtn({ generateHandler }) {
  return (
    // This is the generate button
    <button
      //  This triggers the generateHandler function when clicked
      onClick={generateHandler}
      //  These are the styles applied to the button
      className={
        "my-2 bg-zinc-800 hover:bg-gray-700 text-[#ff0] font-bold py-2 px-4 border-[#ffff00] border-2 rounded-md shadow-sm text-lg"
      }
    >
      {/* This is the text displayed on the button */}
      Generate
    </button>
  );
}

export default GenerateBtn;
