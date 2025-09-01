export type Anime = {
    mal_id: number
    title: string
    aired: {
        string: string
    }
    episodes: number
    duration: string
    genres: [
        {
            mal_id: number
            name: string
        },
        {
            mal_id: number
            name: string
        },
        {
            mal_id: number
            name: string
        }
    ]
    images: {
        jpg: {
            image_url: string
        }
    }
    synopsis: string
    studios: [
        {
            mal_id: number
            name: string
        }
    ]
    source: string
    demographics: [
        {
            mal_id: number
            name: string
        }
    ]
}