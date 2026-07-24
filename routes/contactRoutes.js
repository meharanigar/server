import express from "express";

import {
  saveContact,
  getAllMessages,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", saveContact);

router.get("/", getAllMessages);

export default router;