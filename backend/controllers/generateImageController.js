import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

// Create a configuration object for the OpenAI API
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of the OpenAI API
const openai = new OpenAIApi(config);

// This function generates an image based on the prompt and size parameters
const generateImage = async (req, res) => {
  // Extract the prompt and size parameters from the request body
  const { prompt, size } = req.body;

  // Extract the prompt and size parameters from the request body
  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    // Send a POST request to the API endpoint to generate the image
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: imageSize,
    });

    // Get the generated image URL from the API response
    const imageUrl = response.data.data[0].url;

    // Send a GET request to the image URL to retrieve the image data
    const imageResponse = await axios({
      method: "GET",
      url: imageUrl,
      responseType: "arraybuffer",
    });

    // Set the HTTP headers to force the browser to download the image
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", "attachment; filename=image.png");

    // Send the image to the client
    res.status(200).send(Buffer.from(imageResponse.data, "binary"));
  } catch (error) {
    if (error.response) {
      // If the request was sent and the server responded with a status code that indicates an error occurred
      console.log(error.response.status);
      console.log(error.response.data);

      // Set the content type and send an error response to the client
      res.setHeader("Content-Type", "image/png");
      res.status(400).json({
        success: false,
        error: "The image could not be generated",
      });
    } else {
      // If something else went wrong
      console.log(error.message);
    }
  }
};

export default generateImage;
