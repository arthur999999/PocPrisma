
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
    return prisma.films.create({
        data: {
            name: film.name,
            conclued: false,
            image: film.image,
            categoryId: film.categoryId
        }
    })
}

async function getFilmId (id: string){
    let realId = Number(id)
    return prisma.films.findUnique({
        where: {
            id: realId
        }
    })
}

async function updateConclued(id:string) {
    const newId = Number(id)
    return prisma.films.update({
        where: {
            id: newId,
        },
        data: {
            conclued: true
        }
    })
}

async function deleteFilm(id: string) {
    return prisma.films.delete({
        where: {
            id: Number(id)
        }
    })
}

async function getFilms(){
    return prisma.films.findMany({
        include: {
            categories: {
                select: {
                    name: true
                }
            }
        }
    })
}

async function getFilmsCategory(id: number){
    return prisma.films.findMany({
        where: {
            categoryId: id
        }
    })
}

async function getActors (id: number) {
    return prisma.actorfilm.findMany({
        where: {
            filmId: id
        },
        include: {
            actors: {
                select : {
                    name: true
                }
            }
        }
    })
}

export const filmRepository = {
    getCategory,
    getFilmName,
    creatFilm,
    getFilmId,
    updateConclued,
    deleteFilm,
    getFilms,
    getFilmsCategory,
    getActors
}