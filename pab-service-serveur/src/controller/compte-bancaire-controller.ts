//Import de express
import { Request, Response } from "express"
//Import interface
import { CompteBancaireInterface } from "../interfaces/compte-bancaire-interface";
//import factory
import { CompteBancaireFactory } from "../factories/compte-bancaire-factory";
import { createCompteBancaire, deleteCompteBancaire, getAllCompteBancaire, getCompteBancaireById, updateCompteBancaire } from "../model/compte-bancaire-model";

//CRUD
//READ ALL
export const getAllCompteBancaireController = async (req: Request, res: Response) => {
    try {
        const allComptedb = await getAllCompteBancaire();
        res.status(200).json(allComptedb);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupérer les comptes bancaires dans le controller" });
    }
};

//READ ONE
export const getCompeBancaireByIdController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        const comptedb = await getCompteBancaireById(id);
        res.status(200).json(comptedb);
    } catch (error) {
        res.status(500).json({ error: "Problème avec la lecture dans le controller" });
    }
};

//CREATE 
export const createCompteBancaireController = async (req: Request, res: Response) => {
    try {
        const data: CompteBancaireInterface = CompteBancaireFactory.exportCompteBancaire(req, res);
            createCompteBancaire(data);
            res.status(201).json({ message: "Compte bancaire créé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Problème avec la creation dans le controller" });
    }
};

//UPDATE
export const updateCompteBancaireController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: CompteBancaireInterface = CompteBancaireFactory.exportCompteBancaire(req, res);
            updateCompteBancaire(id, data);
            res.status(200).json({ message: "Compte Bancaire mis à jour avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Problème lors de la mise à jour dans le controlleur" });
    }
};

//DELETE
export const deleteCompteBancaireController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        await deleteCompteBancaire(id);
        res.status(204).json({ message: "Compte bancaire supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Problème avec la suppression du compte bancaire dans le controller" });
    }
};
//FIN CRUD