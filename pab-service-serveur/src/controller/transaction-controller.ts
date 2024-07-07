//Import de express
import { Request, Response } from "express"
//Import interface
import { Transaction } from "../interfaces/transaction-interface";
//import factory
import { TransactionFactory } from "../factories/transaction-factory";
import {createTransaction, deleteTransaction, getAllTransactions, getCTransactionById, updateTransaction} from "../model/transaction-model";


//CRUD
//READ ALL
export const getAllTransactionsController = async (req: Request, res: Response) => {
    try {
        const transactionDb = await getAllTransactions();
        res.status(200).json(transactionDb);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupérer les transactions dans le controller" });
    }
};

//READ ONE
export const getTransactionController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        const transactionDb = await getCTransactionById(id);
        res.status(200).json(transactionDb);
    } catch (error) {
        res.status(500).json({ error: "Problème avec la lecture dans le controller" });
    }
};

//CREATE 
export const createTransactionController = async (req: Request, res: Response) => {
    try {
        const data: Transaction = TransactionFactory.exportTransaction(req, res);
            createTransaction(data);
            res.status(201).json({ message: "Transaction créée avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Problème avec la creation dans le controller" });
    }
};

//UPDATE
export const updateTransactionController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: Transaction = TransactionFactory.exportTransaction(req, res);
            updateTransaction(id, data);
            res.status(200).json({ message: "Transaction mise à jour avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Problème lors de la mise à jour dans le controlleur" });
    }
};

//DELETE
export const deleteTransactionController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        await deleteTransaction(id);
        res.status(204).json({ message: "Transaction supprimée avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Problème avec la suppression de la transaction dans le controller" });
    }
};
//FIN CRUD