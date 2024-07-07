import {
  getAllPaiements,
  getPaiementsById,
  createPaiements,
  updatePaiements,
  deletePaiements,
} from "../model/paiement-model";
import { Request, Response } from "express";
import { Paiement } from "../interfaces/paiement-interface";
import { PaiementFactory } from "../factories/paiement-factory";

export const getAllPaiement = async (req: Request, res: Response) => {
  try {
    const allUserdb = await getAllPaiements();
    res.status(200).json(allUserdb);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Impossible de récupérer tous les paiements" });
  }
};

export const getPaiementById = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const PaiementdbModel = await getPaiementsById(id);
    res.status(200).json(PaiementdbModel);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createPaiement = async (req: Request, res: Response) => {
  try {
    const data: Paiement = PaiementFactory.exportPaiement(req, res);
    await createPaiements(data);
    res.status(201).json({ message: "Paiement crée" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updatePaiement = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const data: Paiement = PaiementFactory.exportPaiement(req, res);
    await updatePaiements(id, data);
    res.status(200).json({ message: "Paiement mis à jour"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deletePaiement = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    await deletePaiements(id);
    res.status(204).json({ message: "Paiement Supprimé" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
