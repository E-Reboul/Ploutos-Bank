import express from "express"
import {createTransactionController, deleteTransactionController, getAllTransactionsController, getTransactionController, updateTransactionController} from "../controller/transaction-controller"
const router = express.Router();

module.exports = router;
//CRUD
router.get("/all", getAllTransactionsController);
router.get("/one/:id", getTransactionController);
router.post("/create", createTransactionController);
router.put("/update/:id", updateTransactionController);
router.delete("/delete/:id", deleteTransactionController);
//FIN CRUD
