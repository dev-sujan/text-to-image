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
        "my-2 bg-[#ff0] hover:bg-zinc-800 hover:text-[#ff0] text-[#000] text- font-bold py-2 px-4 hover:border-[#ff0] border-[#000] border-2 rounded-md shadow-sm text-lg"
      }
    >
      {/* This is the text displayed on the button */}
      Generate
    </button>
  );
}

export default GenerateBtn;
