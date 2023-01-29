import { Router } from "express";
import { concluedFilm, deleteFilm, listActorFromFilm, listFilms, listFilmsCategory, postFilm } from "../controllers/filmController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { filmSchema } from "../schemas/filmSchema.js";

const routers = Router()

routers.post('/film', validateBody(filmSchema), postFilm)
routers.put('/conclued/:id', concluedFilm)
routers.delete('/film/:id', deleteFilm)
routers.get('/films', listFilms)
routers.get('/films/categoryId/:id', listFilmsCategory )
routers.get('/actors/:filmId', listActorFromFilm)


export default routers

