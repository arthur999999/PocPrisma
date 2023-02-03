import supertest from "supertest"
import app from "app"
import prisma from "db/db"

const api = supertest(app)

describe('testando concluedfilm',  () => {

    const id = 1


    it('testee', async ()=>{

    const result = await api.put(`/conclued/${id}`)

    expect(result.status).toBe(200)

    })

    afterAll(async()=> {
        await prisma.films.update({
            where: {
                id: id,
            },
            data: {
                conclued: false
            }
        })
    })
})