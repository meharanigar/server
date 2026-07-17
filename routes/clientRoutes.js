import express from "express";
import{
    addClient,
} from "../controllers/clientController.js";

router.post("/",addClient);

export default router;


