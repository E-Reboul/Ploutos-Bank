//import bdd
import connection from "../config/database";

//import interface
import { pret, pretComplete } from "../interfaces/prets-interface"

export const getAllPrets = async (): Promise<pret[]> => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT nom_du_pret, contrat, taux, montant, compte_bancaire_id FROM pret", (error, results, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const pretDb = JSON.parse(JSON.stringify(results))
                resolve(pretDb);

            };
        });
    });
};

export const getPretById = async (id: number): Promise<pret> => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT nom_du_pret, contrat, taux, montant, compte_bancaire_id FROM pret WHERE id = ${id}`, (error, result, field) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const pretDb = JSON.parse(JSON.stringify(result))
                resolve(pretDb);

            };
        });
    });
};

export const createPret = async (newPret: pretComplete): Promise<pretComplete> => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO pret SET ?', [newPret], (error, results, field) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(results);
                resolve(results);

            };
        });
    });
};

export const updatePret = async (id: number, pret: pretComplete): Promise<pretComplete> => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE pret SET ? WHERE id = ${id}`, [pret, id], (error, result, field) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(result);
                resolve(result);

            };
        });
    });
};

export const deletePret = async (id: number): Promise<pret> => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM pret WHERE id = ${id}`, id, (error, result, field) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(result);
                resolve(result);

            };
        });
    });
};