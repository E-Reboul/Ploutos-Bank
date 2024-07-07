import { Request, Response } from "express";
// importation d'express
import dotenv, { parse } from "dotenv";
// Importation de dotenv
dotenv.config();
// Configuration de dotenv

// Import des du Model
import { createCardBancaire, deleteCardBancaire, getAllCardBancaire, getIdCardBancaire, updateCardBancaire } from "../model/cb-model";
// Import de l'interface
import { CarteBancaire } from "../interfaces/cb-interface";
// // Import de la Factory
import { dataFactory, CardBankFactory } from "../Entities/cb-factory";

// Récupération de tout les utilisateurs
export const getAllCardBank = async (req: Request, res: Response) => {
    try {
        const allCard = await getAllCardBancaire();
        res.status(200).json(allCard);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupérer les cartes bancaire" });
    };
};

export const getCardBankById = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const card = await getIdCardBancaire(id);
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupéré l'id de la carte bancaire" });
    };
};

export const createCardBank = async (req: Request, res: Response) => {
    try {
        const data: CarteBancaire = dataFactory.exportCard(req, res);
        createCardBancaire(data);
        res.status(201).json({ Message: "Carte crée avec succès" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: "Impossible de crée la carte bancaire" })
    };
};

export const updateCardBank = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: CarteBancaire = dataFactory.exportCard(req, res);
        updateCardBancaire(id, data);
        res.status(200).json({ Message: "Carte Bancaire mise à jour avec succès"})
    } catch (error) {
        res.status(500).json({ Error: "Impossible de modifier la carte bancaire" })
    };
};

export const deleteCardBank = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        await deleteCardBancaire(id);
        res.status(204).json({ Message: "La suppression de la carte bancaire a été effectué"});
    } catch (error) {
        res.status(500).json({ Error: "Impossible de supprimer la carte bancaire"});
    };
};