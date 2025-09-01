import { useEffect, useState } from "react"
import { Card } from "./Card"
import { Header } from "./Header"
import { Anime } from "@/types/Anime";
import { getTrendingAnimes } from "@/data/animeApi";

export const Trending = () => {

    const [animeData, setAnimeData] = useState<Anime[]>([]);

    useEffect(() => {
        const getData = getTrendingAnimes();
        getData.then((res) => setAnimeData(res.data))
    }, [])
    return (
        <section className="w-screen h-auto min-h-[100vh] text-primary">
            <div className="container mx-auto">
                <Header auth={true} />
                <div className="p-2 flex justify-center w-full">
                    <div className="flex flex-col w-full">
                        <div className="h-[40px] mt-[15px] w-full flex items-center">
                            <div className="w-1 h-6 bg-primary m-1"></div>
                            <h1 className="text-xl font-bold">Trending Tops</h1>
                        </div>
                        <div className="w-full flex flex-col lg:gap-5 lg:flex-wrap lg:flex-row md:flex-wrap md:flex-row md:gap-5 sm:items-center sm:gap-5 sm:flex-col">
                            {animeData.slice(0, 24).map((item) => (
                                <Card key={item.mal_id} data={item} />
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}