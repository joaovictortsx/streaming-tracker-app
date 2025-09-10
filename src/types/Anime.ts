export type Anime = {
    mal_id: number
    title: string
    title_english: string
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
    score: number
    scored_by: number
    rank: number
    type: string
    trailer: {
        embed_url: string
    }
}