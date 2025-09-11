import { useEffect, useState } from "react"
import { Card } from "./Card"
import { Header } from "./Header"
import { Anime } from "@/types/Anime"
import { getNewSeasonAnimes } from "@/data/jikanApi"

export const New = () => {

    {/* State que armazena dados obtidos na requisição */ }
    const [animeData, setAnimeData] = useState<Anime[]>([]);


    {/* Fazendo requisição dos novos animes da temporada */ }
    useEffect(() => {
        const getData = getNewSeasonAnimes();
        getData.then((res) => setAnimeData(res.data))
    }, [])


    return (
        <section className="w-screen h-auto min-h-[100vh] text-primary">
            <div className="container mx-auto">
                <Header auth={true} />
                <div className="p-2 flex justify-center w-full">
                    <div className="flex w-full flex-col">
                        <div className="h-[40px] mt-[15px] w-full flex items-center">
                            <div className="w-1 h-6 bg-primary m-1"></div>
                            <h1 className="text-xl font-bold">New Releases</h1>
                        </div>
                        <div className="w-full flex flex-col lg:gap-5 lg:flex-wrap lg:flex-row md:flex-wrap md:flex-row md:gap-5 sm:items-center sm:gap-5 sm:flex-col">
                            {/* TV show card */}
                            {/* Verificando se existe algum dado na state animeData */}
                            {animeData.length === 0 &&
                                <div className="w-full flex flex-col items-center justify-center h-[500px] bg-white rounded-lg shadow-xl">
                                    <div className="border-4 border-r-transparent w-[50px] h-[50px] rounded-full animate-spin"></div>
                                </div>
                            }
                            {animeData.length > 0 &&
                                animeData.slice(0, 24).map((item) => (
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