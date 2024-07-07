import express from "express"
import { getAllBanqueB, getBanqueById, createBanque, updateBanqueB, deleteBanqueB } from "../controller/banque-controller";


const router = express.Router();

module.exports = router;

//ROUTE CRUD BANQUE
router.get("/all", getAllBanqueB);
router.get("/one/:id", getBanqueById);
router.post("/create", createBanque);
router.put("/update/:id",updateBanqueB);
router.delete("/delete/:id",deleteBanqueB);

