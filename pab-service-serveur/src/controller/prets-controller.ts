import { Request, Response } from "express";

import { getAllPrets, getPretById, createPret, updatePret, deletePret } from "../model/prets-model";
import { pret, pretComplete } from "../interfaces/prets-interface";

import { pretFactory } from "../factories/prets-factory";

export const allPrets = async (req: Request, res: Response): Promise<void> => {
    try {
        const allPretsDb: pret[] = await getAllPrets();
        res.status(200).json(allPretsDb);
        
    } catch (error) {
        res.status(500).json({error: "Impossible de récupérer les données des prêts"});

    };

};

export const pretById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number= parseInt(req.params.id);
        const pretDb = await getPretById(id);
        res.status(200).json(pretDb);

    } catch (error) {
        // console.error(error)
        res.status(500).json({error: "Impossible de récupérer les données du pret"});

    };

};

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const newPret: pretComplete = pretFactory.createPret(req, res)

        const pretCreate: pretComplete = await createPret(newPret)
        res.status(200).json(pretCreate);

    } catch (error) {
        res.status(500).json({error: "Impossible de crée les données"});

    };

};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id);
        const pretDb: pretComplete = pretFactory.createPret(req, res);

        const pretUpdate: pretComplete = await updatePret(id, pretDb);
        res.status(200).json(pretUpdate);

    } catch (error) {
        res.status(500).json({error: "Impossible de modifier les données"});

    };

};

export const deleteById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id)
        const pretDb: pret = await deletePret(id)
        res.status(200).json(pretDb);

    } catch (error) {
        res.status(500).json({error: "Impossible de supprimer les données"});

    };

};