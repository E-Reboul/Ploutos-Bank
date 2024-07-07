import express from "express"
import { getAllUserC, getUserByIdC, createUserC, updateUserC, deleteUserC, loginUser } from "../controller/user-controller";
import { verifyToken } from "../middleware/auth";
const router = express.Router();

module.exports = router; // si je l'enleve ca ne fonctionne plus
//CRUD
router.get("/all", verifyToken, getAllUserC);
router.get("/one/:id", verifyToken, getUserByIdC);
router.post("/create",verifyToken, createUserC);
router.put("/update/:id",verifyToken, updateUserC);
router.delete("/delete/:id",verifyToken, deleteUserC);
//FIN CRUD
//LOGIN
router.post("/loginU", loginUser);
//FIN LOGIN