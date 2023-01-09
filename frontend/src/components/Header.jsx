import React from "react";

// This function returns a header element for the Text To Image Generator
function Header() {
  return (
    //   This is the header container
    <header
      //   These are the styles applied to the header
      className={"h-12 py-2 bg-[#191923] text-[#FEFF0F] font-bold text-3xl flex"}
    >
      {/* This is the title of the Text To Image Generator */}
      <h1 className="mx-auto">Text To Image Generator</h1>
    </header>
  );
}

export default Header;
