import express from "express";
import cors from  "cors";
import routers from "./routes/routes";

const app = express()

app.use(cors())
app.use(express.json())

app.use(routers)

app.listen(5000, ()=> console.log('rodando'))

export default app