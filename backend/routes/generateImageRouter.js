import express from "express";

// Import the generateImage controller
import generateImage from "../controllers/generateImageController.js";

// Create a router for the generateImage routes
const generateImageRouter = express.Router();

// Set up a POST route for the '/image' path that uses the generateImage controller
generateImageRouter.post("/image", generateImage);

// Export the router
export default generateImageRouter;
