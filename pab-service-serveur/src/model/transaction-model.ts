import connection from "../config/database";
import { Transaction } from "../interfaces/transaction-interface";



//CRUD
//READ ALL
export const getAllTransactions = (): Promise<Transaction[]> => { //retourne une promesse de type Transaction sous le format tableau
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `transaction`", (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const transactionDb = JSON.parse(JSON.stringify(rows));
                console.log(transactionDb);
                resolve(transactionDb);
            }
        });
    });
};

//READ ONE

export const getCTransactionById = (id: number): Promise<Transaction> => { //Retourne une promesse de style Transaction
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM transaction INNER JOIN depenses_revenus ON transaction.depenses_revenus_id=depenses_revenus.id INNER JOIN etablissement ON transaction.etablissement_id=etablissement.id WHERE compte_bancaire_id = ${id}`, (error, rows) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(id);
                const transactionDb = JSON.parse(JSON.stringify(rows));
                console.log(transactionDb);
                resolve(transactionDb);
            }
        });
    });
};

//CREATE
export const createTransaction = (data: Transaction): Promise<Transaction> => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO transaction SET ?', data, (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(results);
                resolve(results);
            }
        });
    });
};

//UPDATE 

export const updateTransaction = (id: number, data: Transaction): Promise<Transaction> => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE transaction SET ? WHERE id = ?', [data, id], (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(results);
                resolve(results);
            }
        });
    });
};

//DELETE
export const deleteTransaction = (id: number): Promise<undefined> => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM transaction WHERE id = ${id}`, (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(results);
                resolve(results);
            }
        });
    });
};

//FIN DU CRUD