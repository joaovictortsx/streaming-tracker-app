import { createContext, ReactNode, useEffect } from "react";


type ListContextType = {

}

type Props = {
    children: ReactNode;
}

export const ListContext = createContext<ListContextType | null>(null)
export const ListContextProvider = ({children}: Props) => {

    useEffect(() => {

    }, [])

    return(
        <ListContext.Provider value={{}}>
            {children}
        </ListContext.Provider>
    )
}