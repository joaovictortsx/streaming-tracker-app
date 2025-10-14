import { addItem, getAll, getFavorites, getSeeLater, getWatcheds, toggleFavorite, toggleSeeLater, toggleWatched } from "@/data/listApi";
import { Anime } from "@/types/Anime";
import { List } from "@/types/List";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";


type ListContextType = {
    allListData: List[],
    favoriteData: List[],
    watchedData: List[],
    seeLaterData: List[]

    removeFromList: (l: string, data: List) => void;

    handleBtnFavorite: (d: List) => void;
    handleBtnWatched: (d: List) => void;
    handleBtnSeeLater: (d: List) => void;
}

type Props = {
    children: ReactNode;
}

export const ListContext = createContext<ListContextType | null>(null)
export const ListContextProvider = ({ children }: Props) => {

    //states para armazenar dados da api
    const [allListData, setAllListData] = useState<List[]>([])
    const [favoriteData, setFavoriteData] = useState<List[]>([]);
    const [watchedData, setWatchedData] = useState<List[]>([]);
    const [seeLaterData, setSeeLaterData] = useState<List[]>([]);


    const removeFromList = (list: string, data: List) => {
        switch (list) {
            case 'favorite':
                handleBtnFavorite(data)
                toast.error(`${data.title} removido dos favoritos.`)
                window.location.reload()
                break;
            case 'watched':
                handleBtnWatched(data)
                toast.error(`${data.title} removido dos assistidos.`)
                window.location.reload()
                break;
            case 'seeLater':
                handleBtnSeeLater(data)
                toast.error(`${data.title} removido dos ver depois.`)
                window.location.reload()
                break;
            default:
                break;
        }
    }




    //functions que manipulam marcar como favorite, watched, see later
    // favorite function
    const handleBtnFavorite = (data: List) => {
        console.log('ijdaowsjdoia')
        const filterItem = allListData.filter((item) => item.mal_id == data.mal_id);
        if (filterItem.length > 0) {
            toggleFavorite(data)
            if (data.favorite == false) {
                toast.success(`${data.title} adicionado como favorito!`)
            } else {
                toast.error(`${data.title} removido como favorito!`)
            }
        } else {
            addItem(data)
            toggleFavorite(data)
            toast.success(`${data.title} adicionado como favorito!`)
        }
    }


    // watched function
    const handleBtnWatched = (data: List) => {
        const filterItem = allListData.filter((item) => item.mal_id == data.mal_id);

        if (filterItem.length > 0) {
            toggleWatched(data)
            if (data.watched == false) {
                toast.success(`${data.title} adicionado como visto!`)
            } else {
                toast.error(`${data.title} removido como visto!`)
            }
        } else {
            addItem(data)
            toggleWatched(data)
            toast.success(`${data.title} adicionado como favorito!`)
        }
    }


    // see later function
    const handleBtnSeeLater = (data: List) => {
        const filterItem = allListData.filter((item) => item.mal_id == data.mal_id);
        if (filterItem.length > 0) {
            toggleSeeLater(data)
            if (data.see_later == false) {
                toast.success(`${data.title} adicionado como ver depois!`)
            } else {
                toast.error(`${data.title} removido como ver depois!`)
            }
        } else {
            addItem(data)
            toggleSeeLater(data)
            toast.success(`${data.title} adicionado como ver depois!`)
        }
    }


    useEffect(() => {

        const getFavoriteData = getFavorites();
        getFavoriteData.then((res) => setFavoriteData(res));

        const getWatchedData = getWatcheds();
        getWatchedData.then((res) => setWatchedData(res));

        const getSeeLaterData = getSeeLater();
        getSeeLaterData.then((res) => setSeeLaterData(res));

        const getAllData = getAll();
        getAllData.then((res) => setAllListData(res))

    }, [])

    return (
        <ListContext.Provider value={{ allListData, favoriteData, watchedData, seeLaterData, removeFromList, handleBtnFavorite, handleBtnWatched, handleBtnSeeLater }}>
            {children}
        </ListContext.Provider>
    )
}