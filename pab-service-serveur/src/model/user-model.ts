import connection from "../config/database";
import { User, UserComplete } from "../interfaces/user-interface";


//CRUD
export const getAllUsers = (): Promise<User[]> => { //retourne une promesse de type User sous le format tableau
    return new Promise((resolve, reject) => {
        connection.query("SELECT `id`,`nom`,`prenom`,`identifiant`FROM `user`", (error, rows, fields) => {
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

export const getUserById = (id: number): Promise<User> => { //Retourne une promesse de style User
    return new Promise((resolve, reject) => {
        connection.query(`SELECT id, nom, prenom, identifiant, email, etat, numero_telephone FROM user WHERE id = ${id}`, (error, rows) => {
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

export const createUser = (data: User): Promise<User> => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO user SET ?', data, (error, results) => {
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

export const updateUser = (id: number, data: User): Promise<User> => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE user SET ? WHERE id = ?', [data, id], (error, results) => {
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

export const deleteUser = (id: number): Promise<undefined> => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM user WHERE id = ${id}`, (error, results) => {
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
//LOGIN
export const getUserByName = (username: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE identifiant = ?`, [username], (error, rows) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                if (rows.length > 0) {
                    // La donnée retournée doit être du style UserComplete
                    const userDb:UserComplete = rows[0]; 
                    console.log(userDb);
                    resolve(userDb);
                } else {
                    reject({ message: "Cet utilisateur n'existe pas" });
                }
            }
        });
    });
};
//FIN LOGIN