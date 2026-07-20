import express from "express";

import {
  registerClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

router.post("/", registerClient);

router.get("/", getClients);

router.get("/:id", getClientById);

router.put("/:id", updateClient);

router.delete("/:id", deleteClient);

export default router;