import { Anime } from "@/types/Anime";
import { List } from "@/types/List";
import axios from "axios";

/* Configurando URL base para as requisições */
const url = axios.create({
    baseURL: "http://localhost:3000"
})

//requisição para adicionar novo item
export const addItem = async (data: List) => {
    await url.post('/add', {
        mal_id: data.mal_id,
        title: data.title,
        image: data.images.jpg.image_url,
        favorite: false,
        watched: false,
        see_later: false
    });
}

//requisição para pegar tudo da lista
export const getAll = async (): Promise<List[]> => {
    const res = await url.get<List[]>('/allList');
    return res.data;
}

//requisição para pegar todos os itens marcados como favorito
export const getFavorites = async (): Promise<List[]> => {
    const res = await url.get<List[]>('/favorites');
    return res.data;
}

//requisição para marcar/desmarcar como favorito
export const toggleFavorite = async (data: List) => {
    await url.put(`/favorite/${data.id}`, {
        favorite: !data.favorite
    })
}

//requisição para pegar todos os itens marcados como visto
export const getWatcheds = async (): Promise<List[]> => {
    const res = await url.get<List[]>('/watcheds');
    return res.data;
}

//requisição para marcar/desmarcar como visto
export const toggleWatched = async (data: List) => {
    await url.put(`/watched/${data.id}`, {
        watched: !data.watched
    })
}

//requisição para pegar todos os itens marcados como ver depois
export const getSeeLater = async (): Promise<List[]> => {
    const res = await url.get<List[]>('/seeLater');
    return res.data;
}

//requisição para marcar/desmarcar como ver depois
export const toggleSeeLater = async (data: List) => {
    await url.put(`/seeLater/${data.id}`, {
        see_later: !data.see_later
    })
}