import { Request, Response, NextFunction } from "express";
//Import  de verify pour verifier le token
import {verify} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    try {
        if (token) {

            verify(token, process.env.JWT_KEY as string, (error) => {
                if (error) {
                    res.status(503).json({ message: "TOKEN INVALID" });
                } else {
                    next();
                }
            });
        } else {
            res.status(503).json({ message: "Token non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: "Probleme lors de la récupération du token" });
    }
};
