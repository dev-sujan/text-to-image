import React from "react";

// This component displays an error message when an image cannot be generated
function ErrorMessage() {
  return (
    <div className="text-center  text-red-600 text-xl">
      {/* Display error message when image could not be generated */}
      Bad request, image could not be generated
    </div>
  );
}

export default ErrorMessage;
