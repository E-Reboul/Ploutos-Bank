import express from "express"
import { getAllDepRevC, getDepRevByIdC,createDepRevC,updateDepRevC,deleteDepRevC} from "../controller/dep-rev-controller";
const router = express.Router();

module.exports = router;

//CRUD
router.get("/all", getAllDepRevC);
router.get("/one/:id", getDepRevByIdC);
router.post("/create", createDepRevC);
router.put("/update/:id", updateDepRevC);
router.delete("/delete/:id", deleteDepRevC);
// //FIN CRUD
