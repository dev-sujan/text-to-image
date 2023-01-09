import express, { json, urlencoded } from "express";
import {} from "dotenv/config";
import cors from "cors";
import generateImageRouter from "./routes/generateImageRouter.js";

// Create an express app
const app = express();

// Set the port to either the value in the environment variable or 3000
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Parse incoming requests with JSON payloads and URL-encoded payloads
app.use(json());
app.use(urlencoded({ extended: false }));

// Use the generateImageRouter for requests to the '/api' route
app.use("/api", generateImageRouter);

// Start the server and log a message to the console
app.listen(port, () => console.info(`Server listening on port ${port}!`));
