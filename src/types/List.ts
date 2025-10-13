export type List = {
    id: string,
    mal_id: number,
    title: string,
    images: {
        jpg: {
            image_url: string
        }
    }
    favorite: boolean,
    watched: boolean,
    see_later: boolean
}