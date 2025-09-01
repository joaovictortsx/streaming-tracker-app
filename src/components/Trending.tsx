import { Card } from "./Card"
import { Header } from "./Header"

export const Trending = () => {
    return (
        <section className="w-screen h-auto min-h-[100vh] text-primary">
            <div className="container mx-auto">
                <Header auth={true} />
                <div className="p-2 flex justify-center w-full">
                    <div className="flex flex-col">
                        <div className="h-[40px] mt-[15px] w-full flex items-center">
                            <div className="w-1 h-6 bg-primary m-1"></div>
                            <h1 className="text-xl font-bold">Trending Tops</h1>
                        </div>
                        <div className="w-full flex lg:gap-5 lg:flex-wrap md:flex-row md:gap-5 sm:items-center sm:gap-5 sm:flex-col">
                            {/* TV show card */}
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}