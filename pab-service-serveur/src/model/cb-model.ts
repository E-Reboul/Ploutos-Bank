import connection from "../config/database";
// Import de la base de données
import { CarteBancaire } from "../interfaces/cb-interface";

export const getAllCardBancaire = (): Promise<CarteBancaire[]> => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT `id`, `nom_carte`, `type_carte`, `titulaires`, `date_expiration`, `contrat` FROM `carte`", (error, rows, fields) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                const card = JSON.parse(JSON.stringify(rows));
                resolve(card);
            };
        });
    });
};

export const getIdCardBancaire = (id: number): Promise<CarteBancaire> => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT nom_carte, type_carte, titulaires, date_expiration, contrat FROM carte WHERE compte_bancaire_id = ${id}`, (error, rows) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                const card = JSON.parse(JSON.stringify(rows));
                resolve(card);
            };
        });
    });
};

export const createCardBancaire = (data: CarteBancaire): Promise<CarteBancaire> => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO carte SET ?", data, (error, result) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log(result);
                resolve(result);
            };
        });
    });
};

export const updateCardBancaire = (id: number, data: CarteBancaire): Promise<CarteBancaire> => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE carte SET ? WHERE id = ?`, [data, id], (error, results) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log(results);
                resolve(results);
            };
        });
    });
};

export const deleteCardBancaire = (id: number): Promise<undefined> => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM carte WHERE id = ${id}`, (error, result) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log(result);
                resolve(result);
            };
        });
    });
};