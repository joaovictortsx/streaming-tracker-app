'use client'

import { List } from "@/components/List";
import { ListContextProvider } from "@/contexts/ListContext";

const Page = () => {
    return (
        <ListContextProvider>
            <div className="h-auto flex items-center justify-center font-roboto bg-dark-white">
                <List />
            </div>
        </ListContextProvider>
    )
}

export default Page;