import express from "express";
import cors from  "cors";
import routers from "./routes/routes.js";

const app = express()

app.use(cors())
app.use(express.json())

app.use(routers)

app.listen(4500, ()=> console.log('rodando'))