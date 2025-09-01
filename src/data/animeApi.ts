import { Anime } from "@/types/Anime";
import axios from "axios";

const url = axios.create({
    baseURL: "https://api.jikan.moe/v4"
})

export const getNewSeasonAnimes = async (): Promise<Anime[] | any> => {
    const res = await url.get('/seasons/now')
    return res.data;
}

export const getTrendingAnimes = async (): Promise<Anime[] | any> => {
    const res = await url.get('/top/anime?filter=airing')
    return res.data;
}