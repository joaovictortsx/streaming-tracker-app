'use client'
import { Home } from "@/components/Home"

const Page = () => {
    return (
        <div className="flex items-center justify-center font-roboto bg-dark-white">
            <Home auth={true} />
        </div>
    )
}

export default Page;