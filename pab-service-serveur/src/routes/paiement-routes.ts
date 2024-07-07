import express from "express";
import {
  getAllPaiement,
  getPaiementById,
  createPaiement,
  updatePaiement,
  deletePaiement,
} from "../controller/paiement-controller";
const router = express.Router();

module.exports = router;

router.get("/all", getAllPaiement);
router.get("/one/:id", getPaiementById);
router.post("/create", createPaiement);
router.put("/update/:id", updatePaiement);
router.delete("/delete/:id", deletePaiement);
