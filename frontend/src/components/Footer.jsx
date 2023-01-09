import React from "react";

const Footer = () => {
  return (
    // This div is the footer container
    <div className="fixed bottom-0 left-0 z-20 w-full p-1 bg-white border-t border-gray-200 shadow flex items-center justify-center dark:bg-gray-800 dark:border-gray-600">
      {/* This div displays the copyright text and year */}
      <div className="text-sm text-white">
        Copyright &copy; Sujan Maji {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
