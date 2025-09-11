import { Anime } from "@/types/Anime";
import axios from "axios";

/* Configurando URL base para as requisições */
const url = axios.create({
    baseURL: "https://api.jikan.moe/v4"
})


/* Request da lista de animes da nova temporada */
export const getNewSeasonAnimes = async (): Promise<Anime[]> => {
    const res = await url.get<Anime[]>('/seasons/now?filter=tv');
    return res.data;
}


/* Request da lista de animes que estão melhores avaliados da nova temporada */
export const getTrendingAnimes = async (): Promise<Anime[]> => {
    const res = await url.get<Anime[]>('/top/anime?type=tv&filter=airing');
    return res.data;
}


/* Request de apenas 1 anime usando id como filtro */
export const getSingleAnime = async (id: string): Promise<Anime> => {
    const res = await url.get<Anime>(`/anime/${id}`);
    return res.data;
}


/* Request search */
export const getSearchAnime = async (name: string): Promise<Anime> => {
    const res = await url.get<Anime>(`/anime?type=tv&q=${name}`);
    return res.data;
}