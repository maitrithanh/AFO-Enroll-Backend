import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
import { MONGODB_URL, PORT } from "./config/index.js";
//init
const app = express();
//use
app.use(express.json());
app.use(cors());
//connect database mongodb
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
