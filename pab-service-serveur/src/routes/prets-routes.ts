import express from "express";
const router = express.Router();

import { allPrets, pretById, create, update, deleteById } from "../controller/prets-controller"

router.get("/getAll", allPrets);
router.get("/by-id/:id", pretById);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteById);

module.exports = router;