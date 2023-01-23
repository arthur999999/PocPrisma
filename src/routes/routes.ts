import { Router } from "express";
import { concluedFilm, postFilm } from "../controllers/filmController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { filmSchema } from "../schemas/filmSchema.js";

const routers = Router()

routers.post('/film', validateBody(filmSchema), postFilm)
routers.put('/conclued/:id', concluedFilm)


export default routers

