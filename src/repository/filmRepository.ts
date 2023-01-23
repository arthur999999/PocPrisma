import { connection } from "../db/db.js";
import {QueryResult} from "pg"
import { Category, Film, SendFilm } from "../protocols.js";

async function getCategory (id: number): Promise<QueryResult <Category>> {
    return connection.query(`SELECT * FROM categories WHERE id = $1;`, [id])
}

async function getFilmName (name: string): Promise<QueryResult <Film>> {
    return connection.query(`SELECT * FROM films WHERE name = $1;`, [name])
}

async function creatFilm (film: SendFilm){
    return connection.query(`INSERT INTO films (name, conclued, image, "categoryId") VALUES ($1, $2, $3, $4);`, [film.name, false, film.image, film.categoryId])
}

async function getFilmId (id: string): Promise<QueryResult <Film> > {
    return connection.query(`SELECT * FROM films WHERE id = $1;`, [id])
}

async function updateConclued(id:string) {
    return connection.query(`UPDATE films SET conclued = true WHERE id = $1;`, [id])
}

async function deleteFilm(id: string) {
    return connection.query(`DELETE FROM films WHERE id = $1;`, [id])
}

async function getFilms(): Promise<QueryResult<Film>>{
    return connection.query(`SELECT *, categories.name as "categoryName" FROM films JOIN categories ON films."categoryId" = categories.id ;`)
}

async function getFilmsCategory(id: number): Promise<QueryResult<Film>>{
    return connection.query(`SELECT films.id, films.name, films.conclued, films.image, films."categoryId", categories.name as "categoryName" FROM films JOIN categories ON films."categoryId" = categories.id WHERE "categoryId" = $1 ;`, [id])
}

export const filmRepository = {
    getCategory,
    getFilmName,
    creatFilm,
    getFilmId,
    updateConclued,
    deleteFilm,
    getFilms,
    getFilmsCategory
}