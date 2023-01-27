
import {QueryResult} from "pg"
import { Category, Film, SendFilm } from "../protocols.js";
import prisma from "../db/db.js"

async function getCategory (id: number) {
    return prisma.categories.findUnique({
        where: {
            id: id
        }
    })
}

async function getFilmName (name: string){
    return prisma.films.findMany({
        where: {
            name: name
        }
    })
}

async function creatFilm (film: SendFilm){
    return 
}

async function getFilmId (id: string){
    return 
}

async function updateConclued(id:string) {
    return 
}

async function deleteFilm(id: string) {
    return 
}

async function getFilms(){
    return prisma.films.findMany()
}

async function getFilmsCategory(id: number){
    return 
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