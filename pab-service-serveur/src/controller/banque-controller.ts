import { BanqueFactory } from "../factories/banque-factory";
import { getAllBanque, getBanqueByIdB, createBanqueDb, updateBanque, deleteBanque } from "../model/banque-model";
import { Request, Response } from "express"
import { Banque } from "../interfaces/banque-interface";

//CRUD BANQUE

export const getAllBanqueB = async (req: Request, res: Response) => {
    try {
        const allBanqueDb = await getAllBanque();
        res.status(200).json(allBanqueDb);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récuperer la banque demander"});
    }
};

//fonctionne 
export const getBanqueById = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        const BanqueDb = await getBanqueByIdB(id);
        res.status(200).json(BanqueDb);
    } catch (error) {
        res.status(500).json({error: "Server Error" });
    }
};

export const createBanque = async  (req: Request, res: Response) => {
    try {
        const data: Banque = BanqueFactory.exportBanque(req,res);
        await createBanqueDb(data);

        res.status(201).json({ message: "Banque crée avec succès"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error:"Immpossible de crée une banque"})
    };
};

export const updateBanqueB = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: Banque = { "nom_banque": req.body.nom_banque, "numero_guichet": req.body.numero_guichet, "numero_telephone": req.body.numero_telephone, "adresse": req.body.adresse, "email": req.body.email }
        updateBanque(id, data);
        res.status(200).json({ message: "Banque mise a jour" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const deleteBanqueB = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        await deleteBanque(id);
        res.status(204).json({ message: "Banque supprimé avec succès"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
};