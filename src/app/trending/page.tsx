'use client'

import { Trending } from "@/components/Trending";
import { ListContextProvider } from "@/contexts/ListContext";
import { ToastContainer } from "react-toastify";

const Page = () => {
    return (
        <ListContextProvider>
            <div className="h-auto flex items-center justify-center font-roboto bg-dark-white">
                <Trending />
            </div>
            <ToastContainer position="bottom-right" />
        </ListContextProvider>

    )
}

export default Page;