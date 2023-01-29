import prisma from "../src/db/db.js"

async function main() {

    await prisma.categories.createMany({
        data: [
            {
                "name": "Ação"
            },
            {
                "name": "Comédia"
            },
            {
                "name": "Romance" 
            },
            {
                "name": "Aventura"
            },
            {
                "name": "Infantil"
            },
            {
                "name": "Terror"
            }
        ]
    })

    await prisma.actors.createMany({
        data: [
            {
                "name": "Adam Sandler"
            },
            {
                "name": "Adam Sand"
            },
            {
                "name": "Mada Sandler"
            },
            {
                "name": "Ad ler"
            }
        ]
    })

    await prisma.films.createMany({
        data: [
            {
                "name": "Filme1",
                "conclued": false,
                "image": "image",
                "categoryId": 1 
            },
            {
                "name": "Filme2",
                "conclued": false,
                "image": "image",
                "categoryId": 3 
            },
            {
                "name": "Filme3",
                "conclued": false,
                "image": "image",
                "categoryId": 4 
            },
            {
                "name": "Filme4",
                "conclued": false,
                "image": "image",
                "categoryId": 2 
            },
            {
                "name": "Filme5",
                "conclued": false,
                "image": "image",
                "categoryId": 6 
            }
        ]
    })

    await prisma.actorfilm.createMany({
        data: [
            {
                "actorId" : 1,
                "filmId": 1
            },
            {
                "actorId" : 2,
                "filmId": 2
            },
            {
                "actorId" : 2,
                "filmId": 1
            },
            {
                "actorId" : 3,
                "filmId": 1
            },
            {
                "actorId" : 1,
                "filmId": 3
            },
            {
                "actorId" : 4,
                "filmId": 3
            },
            {
                "actorId" : 1,
                "filmId": 4
            },
            {
                "actorId" : 1,
                "filmId": 5
            },
            {
                "actorId" : 3,
                "filmId": 5
            }
        ]
    })
}

main()
    .then(()=> {
        console.log('registro feito com sucesso')
    })

    .catch(e =>{ 
        console.error(e)
        process.exit(1)
    })
    .finally(async() => {
        await prisma.$disconnect()
    })