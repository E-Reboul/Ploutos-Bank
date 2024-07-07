import express from "express"
import {
    getAllEtab, getEtabById, deleteEtab, createEtab, updateEtab } from "../controller/etablissement-controller";

const router = express.Router();

module.exports = router; // si je l'enleve ca ne fonctionne plus

//CRUD
router.get("/all", getAllEtab);
router.get("/one/:id", getEtabById);

router.post("/create", createEtab);
router.put("/update/:id", updateEtab);
router.delete("/delete/:id", deleteEtab);

//FIN CRUD
