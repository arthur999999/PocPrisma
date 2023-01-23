import { connection } from "../db/db.js";
import {QueryResult} from "pg"
import { Category, Film } from "../protocols.js";

async function getCategory (id: number): Promise<QueryResult <Category>> {
    return connection.query(`SELECT * FROM categories WHERE id = $1;`, [id])
}

async function getFilmName (name: string): Promise<QueryResult <Film>> {
    return connection.query(`SELECT * FROM films WHERE name = $1;`, [name])
}

export const filmRepository = {
    getCategory,
    getFilmName
}