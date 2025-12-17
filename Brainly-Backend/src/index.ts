import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/UserRoutes.js";
import ContentRouter from "./routes/ContentRoutes.js"
import LinkRouter from "./routes/LinkRoutes.js";
import { MONGODB_URL } from "./config.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/user',UserRouter);
app.use('/api/v1/content',ContentRouter);
app.use('/api/v1/brain',LinkRouter);

async function main(){
    await mongoose.connect(MONGODB_URL);
    app.listen(3000);
    console.log("Server running on port 3000");
}

main();


