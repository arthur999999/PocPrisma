import { SendFilm } from "../protocols.js";
import { filmRepository } from "../repository/filmRepository.js";

async function verifyCategoryID(id: number) {
    const category = await filmRepository.getCategory(id)

    if(!category.rows[0]){
        
        throw {
            name: 'ConflictErrorCategory',
            message: 'This catergory not exists'
        }
    }
}

async function verifyNameFilm(name: string) {
    const film = await filmRepository.getFilmName(name)

    if(film.rows[0]){

        throw {
            name: 'ConflictErrorFilm',
            message: 'This film already registered'
        }
    }
}

async function postCreatFilm(film: SendFilm){

    await filmRepository.creatFilm(film)
}

export const filmServices = {
    verifyCategoryID,
    verifyNameFilm,
    postCreatFilm
}