import axios from "axios";
import React from "react";
import { useState } from "react";
import GenerateBtn from "./GenerateBtn";
import Spinner from "./Spinner";
import ImageContainer from "./ImageContainer";
import ErrorMessage from "./ErrorMessage";

// This function returns the Main page of the Text To Image Generator
function Main() {
  // These are the states for the Main page
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [selectedOption, setSelectedOption] = useState("small");
  const [imgUrl, setImgUrl] = useState(null);
  const [isError, setIsError] = useState(false);

  // This function updates the prompt state with the value of the input field
  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  // This function updates the selectedOption state with the value of the select element
  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  // This function triggers the getImage function if the prompt state is not empty, otherwise it displays an alert
  const generateHandler = () => {
    prompt === "" ? alert("Write some text") : getImage(prompt, selectedOption);
  };

  // This function sends a POST request to the API with the prompt and selectedOption states as parameters, then updates the imgUrl state with the response
  const getImage = async (prompt, size) => {
    const API_URL = import.meta.env.VITE_API_URL;

    // This sets the loading state to true while the request is being made
    setIsLoading(true);

    try {
      // This sends the POST request and stores the response in a variable
      const response = await axios({
        method: "POST",
        url: API_URL,
        data: { prompt: prompt, size: size },
        responseType: "blob",
      });
      // If the request is successful, set the isError state to false and the imgUrl state to the URL of the image in the response
      setIsError(false);
      setImgUrl(URL.createObjectURL(response.data));
    } catch (error) {
      //   console.error(error);
      setIsError(true);
    } finally {
      // This sets the loading state to false after the request is complete
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#494949]  flex flex-col items-center">
        <div className="w-96 flex flex-col">
          <div className=" my-1  text-2xl font-bold text-center drop-shadow-md text-white">
            Describe an Image
          </div>

          {/* Input field for prompt */}
          <input
            onChange={handlePrompt}
            value={prompt}
            className="h-10 bg-zinc-800 rounded-md border-2 border-[#ff0] text-center text-[#ff0] shadow-md"
            type="text"
            name="text"
            placeholder="Write what image you want"
          />

          {/* Select element for image size */}
          <select
            value={selectedOption}
            onChange={handleSelect}
            className=" h-10 mt-2 bg-zinc-800 border-2 border-[#fff] rounded-md text-white text-center text-xl shadow-md font-bold"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Lagre</option>
          </select>

          {/* Button to initiate image generation */}
          {isLoading ? (
            <Spinner />
          ) : (
            <GenerateBtn generateHandler={generateHandler} />
          )}
        </div>
      </div>
      {/* Display either an error message or the generated image */}
      {isError ? <ErrorMessage /> : <ImageContainer imgUrl={imgUrl} />}
    </>
  );
}

export default Main;
