import { Request, Response } from "express";
import { SendFilm } from "../protocols.js";
import { filmServices } from "../services/filmServices.js";

export async function postFilm (req: Request, res: Response) {

    const film: SendFilm = req.body

    try {
        
        await filmServices.verifyCategoryID(film.categoryId)

        res.send('foi').status(200)

    } catch (error) {
        if(error.name === 'ConflictErrorCategory'){
            res.status(409).send(error.message)
            return
        }

        res.status(400).send(error.message)
    }
}