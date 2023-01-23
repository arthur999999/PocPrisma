export type Film = {
    id: number,
    name: string,
    conclued: boolean,
    image: string,
    categoryId: number,
    categoryName?: string 
}

export type SendFilm = {
    name: string,
    image: string,
    categoryId: number
}

export type Category = {
    id: number,
    name: string
}