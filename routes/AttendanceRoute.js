import express from "express";
import {
  addAttendanceHistory,
  getAllAttHistory,
  searchAttHistory,
} from "../controllers/AttendanceController.js";

const router = express.Router();

router.get("/all-attendance-history", getAllAttHistory);
router.post("/add-attendance-history", addAttendanceHistory);
router.get("/search-attendance-history", searchAttHistory);

export default router;
