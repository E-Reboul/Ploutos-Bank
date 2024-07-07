import connection from "../config/database";
import { Paiement } from "../interfaces/paiement-interface";

export const getAllPaiements = (): Promise<Paiement[]> => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT `id`,`type_de_paiement`,`carte_id` FROM `moyen de paiement`",
      (error, rows, fields) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          const paiementDb = JSON.parse(JSON.stringify(rows));
          console.log(paiementDb);
          resolve(paiementDb);
        }
      }
    );
  });
};

export const getPaiementsById = (id: number): Promise<Paiement> => {
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT id, type_de_paiement, carte_id FROM `moyen de paiement` WHERE id = ?',[id],
      (error, rows) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log(id);
          const paiementDb = JSON.parse(JSON.stringify(rows));
          console.log(paiementDb);
          resolve(paiementDb);
        }
      }
    );
  });
};

export const createPaiements = (data: Paiement): Promise<Paiement> => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO `moyen de paiement` SET ?",
      data,
      (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log(results);
          resolve(results);
        }
      }
    );
  });
};

export const updatePaiements = (
  id: number,
  data: Paiement
): Promise<Paiement> => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE `moyen de paiement` SET ? WHERE id = ?",
      [data, id],
      (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log(results);
          resolve(results);
        }
      }
    );
  });
};

export const deletePaiements = (id: number): Promise<undefined> => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM `moyen de paiement` WHERE id = ?",[id],
      (error, results) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log(results);
          resolve(results);
        }
      }
    );
  });
};
