//Import des fonctions du model
import {
    getAllEtabM, getEtabByIdM, deleteEtabM, createEtabM, updateEtabM } from "../model/etablissement-model"
//Import de express
import { Request, Response } from "express"
//Import de la fonction Sign de JsonWebToken
// Import des interface
import { Etablissement } from "../interfaces/etablissement-interface";
//Import de dotenv
import dotenv from "dotenv";
import { EtabFactory } from "../factories/etablissement-factory";
dotenv.config();


//CRUD

export const getAllEtab = async (req: Request, res: Response) => {
    try {
        const allEtabdb = await getAllEtabM();
        res.status(200).json(allEtabdb);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupérer les établissements" });
    }
};

export const getEtabById = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        const Etabdb = await getEtabByIdM(id);
        res.status(200).json(Etabdb);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createEtab = async (req: Request, res: Response) => {
    try {
        const data: Etablissement = EtabFactory.exportEtab(req, res)
        createEtabM(data);
        res.status(201).json({ message: "User créé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const updateEtab = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: Etablissement = { "nom_etablissement": req.body.nom_etablissement, "type_etablissement": req.body.type_etablissement }
        updateEtabM(id, data);
        res.status(200).json({ message: "User mis à jour avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    };
}

export const deleteEtab = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        await deleteEtabM(id);
        res.status(204).json({ message: "Etablissement supprimé avec succès" });
        console.log("Etablissement supprimé avec succes");

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

//FIN CRUD
