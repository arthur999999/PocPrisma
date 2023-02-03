import supertest from "supertest"
import app from "app"


const api = supertest(app)

describe('testando listFilms',  () => {

    const id = 1

    it('test list all films', async ()=>{

    const result = await api.get(`/actors/${id}`)   

    expect(result.status).toBe(200)

    expect(result.body).toEqual(expect.arrayContaining([
        expect.objectContaining({
            id: expect.any(Number),
            filmId: expect.any(Number),
            actorId: expect.any(Number),
            actors: expect.objectContaining({
                name: expect.any(String)
            })
        })
    ]))

    })
})