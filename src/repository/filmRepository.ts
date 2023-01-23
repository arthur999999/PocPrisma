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

export const filmRepository = {
    getCategory,
    getFilmName,
    creatFilm,
    getFilmId,
    updateConclued
}