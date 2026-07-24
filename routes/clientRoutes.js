import express from "express";
import upload from "../middleware/upload.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

import {
  registerClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
  loginClient,
} from "../controllers/clientController.js";

const router = express.Router();

// Public Routes
router.post("/", registerClient);

router.post("/login", loginClient);
// Protected Routes

// Only Admin can view all clients
router.get("/", authMiddleware, adminMiddleware, getClients);

// Any logged-in user can view their profile
router.get("/:id", authMiddleware, getClientById);

// Any logged-in user can update their profile
router.put(
  "/:id",
  authMiddleware,
  upload.single("profileImage"),
  updateClient
);

// Only Admin can delete clients
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteClient
);
export default router;