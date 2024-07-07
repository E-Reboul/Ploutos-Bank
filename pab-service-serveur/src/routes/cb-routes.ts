import express from "express";
// Importation d'express
import { createCardBank, deleteCardBank, getAllCardBank, getCardBankById, updateCardBank } from "../controller/cb-controller";
// Importation du controller

const router = express.Router();

// Différentes Route
router.get("/all-card", getAllCardBank); //route pour afficher toutes les cartes bancaire 
router.get("/one-card/:id", getCardBankById); //route pour afficher une carte par son id
router.post("/create-card", createCardBank); //route permettant de crée une carte bancaire
router.put("/update-card/:id", updateCardBank); //route permettant de modifier une carte bancaire par son id
router.delete("/delete-card/:id", deleteCardBank); //route permettant de supprimer une carte par son id

module.exports = router;
