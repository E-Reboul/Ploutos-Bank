import connection from "../config/database";
import { DepRev } from "../interfaces/dep-rev-interface";


//CRUD
export const getAllDepRev = (): Promise<DepRev[]> => { //retourne une promesse de type User sous le format tableau
    return new Promise((resolve, reject) => {
        connection.query("SELECT id,type FROM depenses_revenus", (error, rows) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const usersDb = JSON.parse(JSON.stringify(rows));
                console.log(usersDb);
                resolve(usersDb);
            }
        });
    });
};

export const getDepRevById = (id: number): Promise<DepRev> => { //Retourne une promesse de style User
    return new Promise((resolve, reject) => {
        connection.query(`SELECT type FROM depenses_revenus WHERE id = ${id}`, (error, rows) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(id);
                const userDb = JSON.parse(JSON.stringify(rows));
                console.log(userDb);
                resolve(userDb);
            }
        });
    });
};

export const createDepRev = (data: DepRev): Promise<DepRev> => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO depenses_revenus SET ?', data, (error, results) => {
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

export const updateDepRev = (id: number, data: DepRev): Promise<DepRev> => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE depenses_revenus SET ? WHERE id = ?', [data, id], (error, results) => {
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

export const deleteDepRev = (id: number): Promise<undefined> => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM depenses_revenus WHERE id = ${id}`, (error, results) => {
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
