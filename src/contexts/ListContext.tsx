import { getFavorites } from "@/data/listApi";
import { List } from "@/types/List";
import { createContext, ReactNode, useEffect, useState } from "react";


type ListContextType = {
    favoriteData: List[]
}

type Props = {
    children: ReactNode;
}

export const ListContext = createContext<ListContextType | null>(null)
export const ListContextProvider = ({children}: Props) => {

    //states para armazenar dados da api
    const [favoriteData, setFavoriteData] = useState<List[]>([]);



    useEffect(() => {
        const getFavoriteData = getFavorites();
        getFavoriteData.then((res) => setFavoriteData(res))
    }, [])

    return(
        <ListContext.Provider value={{favoriteData}}>
            {children}
        </ListContext.Provider>
    )
}