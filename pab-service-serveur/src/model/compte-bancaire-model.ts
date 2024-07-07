import connection from "../config/database";
import { CompteBancaireInterface } from "../interfaces/compte-bancaire-interface";



//CRUD
//READ ALL
export const getAllCompteBancaire = (): Promise<CompteBancaireInterface[]> => { //retourne une promesse de type CompteBancaire sous le format tableau
    return new Promise((resolve, reject) => {
        connection.query("SELECT `type_de_compte`,`nom_banque`,`nom`,`prenom`, `solde` FROM `compte_bancaire` INNER JOIN `user` ON compte_bancaire.user_id=user.id INNER JOIN `banque` ON compte_bancaire.banque_id = banque.id", (error, rows, fields) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                const compteDb = JSON.parse(JSON.stringify(rows));
                console.log(compteDb);
                resolve(compteDb);
            }
        });
    });
};

//READ ONE

export const getCompteBancaireById = (id: number): Promise<CompteBancaireInterface> => { //Retourne une promesse de style CompteBancaire
    return new Promise((resolve, reject) => {
        //L'ID SERA CELUI DE L'UTILISATEUR ET NOM DU COMPTE
        connection.query(`SELECT compte_bancaire.id, type_de_compte,nom_banque,nom,prenom,identifiant, solde FROM compte_bancaire INNER JOIN user ON compte_bancaire.user_id=user.id INNER JOIN banque ON compte_bancaire.banque_id = banque.id WHERE user.identifiant = ${id}`, (error, rows) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log(id);
                const compteDb = JSON.parse(JSON.stringify(rows));
                console.log(compteDb);
                resolve(compteDb);
            }
        });
    });
};

//CREATE
export const createCompteBancaire = (data: CompteBancaireInterface): Promise<CompteBancaireInterface> => {
    return new Promise((resolve, reject) => {
        console.log(data);
        connection.query('INSERT INTO compte_bancaire SET ?', data, (error, results) => {
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

export const updateCompteBancaire = (id: number, data: CompteBancaireInterface): Promise<CompteBancaireInterface> => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE compte_bancaire SET ? WHERE id = ?', [data, id], (error, results) => {
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
export const deleteCompteBancaire = (id: number): Promise<undefined> => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM compte_bancaire WHERE id = ${id}`, (error, results) => {
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