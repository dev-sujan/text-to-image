const downloadImg = (imgUrl) => {
  // Create an anchor element
  const link = document.createElement("a");
  // Set the download attribute to "image"
  link.download = "image";
  // Set the href attribute to the imgUrl parameter
  link.href = imgUrl;
  // Append the anchor element to the body
  document.body.appendChild(link);
  // Simulate a click on the anchor element
  link.click();
  // Remove the anchor element from the body
  document.body.removeChild(link);
};

export default downloadImg;
