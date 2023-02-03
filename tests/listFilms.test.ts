import supertest from "supertest"
import app from "app"
import prisma from "db/db"


const api = supertest(app)

describe('testando listFilms',  () => {



    it('test list all films', async ()=>{

    const result = await api.get(`/films`)


    expect(result.status).toBe(200)

    expect(result.body).toEqual(expect.arrayContaining([
        expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            conclued: expect.any(Boolean),
            image: expect.any(String),
            categoryId: expect.any(Number)
        })
    ]))

    })
})