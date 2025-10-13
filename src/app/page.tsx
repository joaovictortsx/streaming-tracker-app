'use client'
import { Home } from "@/components/Home"
import { ListContextProvider } from "@/contexts/ListContext";
import { ToastContainer } from "react-toastify";

const Page = () => {
    return (
        <ListContextProvider>
            <div className="flex items-center justify-center font-roboto bg-dark-white">
                <Home auth={true} />
                <ToastContainer position="bottom-right"/>
            </div>
        </ListContextProvider>
    )
}

export default Page;