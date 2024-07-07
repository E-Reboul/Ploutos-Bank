import connection from "../config/database"; //connection a la DataBase
import { Banque } from "../interfaces/banque-interface";

//CRUD BANQUE
export const getAllBanque = (): Promise<Banque[]> => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `id`, `nom_banque`, `numero_guichet`, `numero_telephone`, `email`, `adresse` FROM `banque`', (error, row, filed) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const banqueDb = JSON.parse(JSON.stringify(row));
                console.log(banqueDb);
                resolve(banqueDb);
            }
        });
    });
};

export const getBanqueByIdB = (id: number): Promise<Banque> => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT id, nom_banque, numero_guichet,numero_telephone, email, adresse FROM banque WHERE id = ${id}`, (error, row) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(id);
                const banqueDb = JSON.parse(JSON.stringify(row));
                console.log(banqueDb);
                resolve(banqueDb);
            }
        });
    });
};

export const createBanqueDb = (data: Banque): Promise<Banque> => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO banque SET ?', data, (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(result);
                resolve(result);
            }
        });
    });
};

export const updateBanque = (id: number, data: Banque): Promise<Banque> => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE banque SET ? WHERE id = ?', [data, id], (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(result);
                resolve(result);
            }
        });
    });
};

export const deleteBanque = (id: number): Promise<undefined> => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM banque WHERE id = ${id}`, (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(result);
                resolve(result);
            }
        });
    });
};