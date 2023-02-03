import supertest from "supertest"
import app from "app"


const api = supertest(app)

describe('testando listFilmByCategory',  () => {

    const id = 3


    it('test list all films from a specific category', async ()=>{

    const result = await api.get(`/films/categoryId/${id}`)


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