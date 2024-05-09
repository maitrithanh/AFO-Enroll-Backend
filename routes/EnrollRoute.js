import express from "express";
import {
  getEnroll,
  addEnroll,
  searchEnroll,
  updateStatusEnroll,
} from "../controllers/EnrollController.js";

const router = express.Router();

router.get("/getAllEnroll", getEnroll);
router.get("/searchEnroll", searchEnroll);
router.post("/addEnroll", addEnroll);
router.post("/updateStatusEnroll", updateStatusEnroll);

export default router;
