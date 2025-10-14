'use client'

import { New } from "@/components/New";
import { ListContextProvider } from "@/contexts/ListContext";
import { ToastContainer } from "react-toastify";

const Page = () => {
    return (
        <ListContextProvider>
            <div className="flex items-center justify-center font-roboto bg-dark-white">
                <New />
            </div>
            <ToastContainer position="bottom-right" />
        </ListContextProvider>
    )
}

export default Page;