import * as dotenv from "dotenv";

dotenv.config();

const { MONGODB_URL, PORT } = process.env;

export { MONGODB_URL, PORT };
