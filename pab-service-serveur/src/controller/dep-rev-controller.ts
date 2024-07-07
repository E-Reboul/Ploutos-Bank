//Import des fonctions du model
import { getAllDepRev, getDepRevById, createDepRev, updateDepRev, deleteDepRev } from "../model/dep-rev-model"
//Import de express
import { Request, Response } from "express"
// Import des interface
import { DepRev } from "../interfaces/dep-rev-interface";
//Import de dotenv
import dotenv from "dotenv";
import { DepRevFactory } from "../factories/dep-rev-factory";
dotenv.config();


//CRUD

export const getAllDepRevC = async (req: Request, res: Response) => {
    try {
        const allUserdb = await getAllDepRev();
        res.status(200).json(allUserdb);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupérer les types de dépenses/revenus" });
    }
};

export const getDepRevByIdC = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        const Userdb = await getDepRevById(id);
        res.status(200).json(Userdb);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createDepRevC = async (req: Request, res: Response) => {
    try {
        const data: DepRev = DepRevFactory.exportDepRev(req, res);
        createDepRev(data);
        res.status(201).json({ message: "Type de dépense/revenu créé avec succès" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateDepRevC = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: DepRev = { "type": req.body.type }
        await updateDepRev(id, data);
        res.status(200).json({ message: "Type de dépense/revenu mis à jour avec succès" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteDepRevC = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        await deleteDepRev(id);
        res.status(204).json({ message: "Type de dépense/revenu supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
// //FIN CRUD
