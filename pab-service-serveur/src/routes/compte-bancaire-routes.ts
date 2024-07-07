import express from "express";
import { verifyToken } from "../middleware/auth";
import { createCompteBancaireController, deleteCompteBancaireController, getAllCompteBancaireController, getCompeBancaireByIdController, updateCompteBancaireController } from "../controller/compte-bancaire-controller";
const router = express.Router();

module.exports = router;
//CRUD
router.get("/all", verifyToken, getAllCompteBancaireController);
router.get("/one/:id",verifyToken, getCompeBancaireByIdController);
router.post("/create",verifyToken, createCompteBancaireController);
router.put("/update/:id",verifyToken, updateCompteBancaireController);
router.delete("/delete/:id",verifyToken, deleteCompteBancaireController);
//FIN CRUD
