import express from "express";
import { genrateSignature } from "../controllers/sign-upload.js";

const router = express.Router();

router.post("/", genrateSignature);

export default router;
