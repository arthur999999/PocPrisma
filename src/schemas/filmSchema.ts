import joi from "joi"
import { SendFilm } from "../protocols"

const filmSchema = joi.object<SendFilm>({
    name: joi.string().required(),
    image: joi.string().required(),
    categoryId: joi.number().required()


})

export {filmSchema}