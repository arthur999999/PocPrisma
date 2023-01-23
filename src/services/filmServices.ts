import { filmRepository } from "../repository/filmRepository.js";

async function verifyCategoryID(id: number) {
    const category = await filmRepository.getCategory(id)

    if(!category.rows[0]){
        
        throw {
            name: 'ConflictErrorCategory',
            message: 'This catergory not exists'
        }
    }
}

export const filmServices = {
    verifyCategoryID
}