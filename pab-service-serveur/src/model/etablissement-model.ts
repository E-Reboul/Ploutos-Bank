import connection from "../config/database";
import { Etablissement } from "../interfaces/etablissement-interface";


//CRUD
export const getAllEtabM = (): Promise<Etablissement[]> => { //retourne une promesse de type User sous le format tableau
    return new Promise((resolve, reject) => {
        connection.query("SELECT `id`,`nom_etablissement`,`type_etablissement`FROM `etablissement`", (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const EtabDb = JSON.parse(JSON.stringify(rows));
                console.log(EtabDb);
                resolve(EtabDb);
            }
        });
    });
};

export const getEtabByIdM = (id: number): Promise<Etablissement> => { //Retourne une promesse de style User
    return new Promise((resolve, reject) => {
        connection.query(`SELECT nom_etablissement, type_etablissement FROM etablissement WHERE id = ${id}`, (error, rows) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(id);
                const EtabDb = JSON.parse(JSON.stringify(rows));
                console.log(EtabDb);
                resolve(EtabDb);
            }
        });
    });
};

export const createEtabM = (data: Etablissement): Promise<Etablissement> => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO etablissement SET ?', data, (error, results) => {
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

export const updateEtabM = (id: number, data: Etablissement): Promise<Etablissement> => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE etablissement SET ? WHERE id = ?', [data, id], (error, results) => {
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

export const deleteEtabM = (id: number): Promise<undefined> => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM etablissement WHERE id = ${id}`, (error, results) => {
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
//FIN CRUD
