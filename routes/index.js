import express from "express";
import EnrollRouter from "./EnrollRoute.js";
import AttendanceRouter from "./AttendanceRoute.js";

const app = express();
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to our API homepage!",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
});
app.use("/enroll", EnrollRouter);
app.use("/ah", AttendanceRouter);

export default app;
