import { getFavorites, getSeeLater, getWatcheds } from "@/data/listApi";
import { List } from "@/types/List";
import { createContext, ReactNode, useEffect, useState } from "react";


type ListContextType = {
    favoriteData: List[],
    watchedData: List[],
    seeLaterData: List[]

    checkList: () => void;
}

type Props = {
    children: ReactNode;
}

export const ListContext = createContext<ListContextType | null>(null)
export const ListContextProvider = ({children}: Props) => {

    //states para armazenar dados da api
    const [favoriteData, setFavoriteData] = useState<List[]>([]);
    const [watchedData, setWatchedData] = useState<List[]>([]);
    const [seeLaterData, setSeeLaterData] = useState<List[]>([]);

    //functions para manipular a lista
    const checkList = (list: string, ) => {
        switch (list) {
            case 'favorite':
                
                break;
            
            case 'watched':

                break;
            
            case 'seeLater': 

                break;
            default:
                break;
        }
        
        
    }


    useEffect(() => {
        const getFavoriteData = getFavorites();
        getFavoriteData.then((res) => setFavoriteData(res));

        const getWatchedData = getWatcheds();
        getWatchedData.then((res) => setWatchedData(res));

        const getSeeLaterData = getSeeLater();
        getSeeLaterData.then((res) => setSeeLaterData(res));
    }, [])

    return(
        <ListContext.Provider value={{favoriteData, watchedData, seeLaterData, checkList}}>
            {children}
        </ListContext.Provider>
    )
}