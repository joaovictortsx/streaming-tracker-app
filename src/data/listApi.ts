import { List } from "@/types/List";
import axios from "axios";

/* Configurando URL base para as requisições */
const url = axios.create({
    baseURL: "http://localhost:3000"
})


export const getFavorites = async (): Promise<List[]> => {
    const res = await url.get<List[]>('/favorites');
    return res.data;
}

export const getWatcheds = async (): Promise<List[]> => {
    const res = await url.get<List[]>('/watcheds');
    return res.data;
}

export const getSeeLater = async (): Promise<List[]> => {
    const res = await url.get<List[]>('/seeLater');
    return res.data;
}