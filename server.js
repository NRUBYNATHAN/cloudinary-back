import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import { ErrorHandler } from "./middlewares/error.js";
import videoRoutes from "./routes/videos.js";
import signUploadRoutes from "./routes/sign-upload.js";
// import { videoRoutes } from "./routes/videos.js";
// import { signUploadRoutes } from "./routes/sign-upload.js";

dotenv.config();

//express app
const app = express();
const port = process.env.PORT || 5000;

//MIddlewares
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

//routes
app.use("/api/videos", videoRoutes);
app.use("/api/sign-upload", signUploadRoutes);

//errorhandler

app.use(ErrorHandler);

//listen to requests

app.listen(port, () => {
  connectDB();
  console.log("server started listening on port", port);
});
