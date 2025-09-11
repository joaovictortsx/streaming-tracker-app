import { Header } from "./Header"
import bgImage from "../assets/img/bgImage.png"
import { useEffect, useState } from "react"
import { Anime } from "@/types/Anime"
import { Card } from "./Card"
import { getSearchAnime } from "@/data/jikanApi"

type Props = {
    auth: boolean
}

export const Home = ({ auth }: Props) => {

    {/* State que armazena os dados obtidos na requisição */ }
    const [animeData, setAnimeData] = useState<Anime[]>([])
    const [searchInput, setSearchInput] = useState<string>('');


    /* Fazendo requisição com o que foi digitado no input search, caso vazio retorna o valor padrão */
    useEffect(() => {
        const getData = getSearchAnime(searchInput);
        getData.then((res) => setAnimeData(res.data))
    }, [searchInput])

    return (
        <section className="w-screen h-auto min-h-[100vh] text-primary">
            {!auth &&
                <div className="container mx-auto h-[calc(100vh-80px)]">
                    <Header auth={false} />
                    <div className="w-full h-auto flex">
                        <div className="w-full h-[600px] flex justify-center text-center lg:w-[45%] ">
                            <div className="flex flex-col justify-center items-center w-[80%] h-[80%] mt-[50px] shadow-2xl bg-white rounded-lg lg:w-[90%] lg:h-[60%]">
                                <h1 className="text-2xl font-bold lg:text-4xl">Track your <br /> Favorites Streamings Shows</h1>
                                <p className="text-lg mt-[15px] lg:text-xl">Make favorites list, watched list, find new show release, trending tops and more</p>
                                <a href="./login" className="mt-[15px] flex items-center justify-center bg-primary text-white w-[90px] h-[45px] rounded-lg cursor-pointer hover:bg-primary/90 lg:w-[100px] lg:h-[50px]">Start now</a>
                            </div>
                        </div>
                        <div className="hidden w-[55%] lg:flex">
                            <img
                                className="w-full"
                                src={bgImage.src} />
                        </div>
                    </div>
                </div>
            }
            {auth &&
                <div className="container mx-auto">
                    <Header auth={true} />
                    <div className="p-2 flex justify-center w-full">
                        <div className="flex w-full flex-col">
                            <div className="h-[60px] mt-[15px] w-full flex flex-col justify-center items-center">
                                <input
                                    className="border-2 bg-white border-primary text-black w-[350px] px-2 outline-0 h-[40px] rounded-lg"
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    value={searchInput}
                                    type="search" name="" id="" placeholder="Search..." />
                            </div>
                            <div className="w-full flex flex-col lg:gap-5 lg:flex-wrap lg:flex-row md:flex-wrap md:flex-row md:gap-5 sm:items-center sm:gap-5 sm:flex-col">


                                {/* Verificando se existe algum dado na state animeData */}
                                {searchInput === '' && animeData.length === 0 &&
                                    <div className="w-full flex flex-col items-center justify-center h-[500px] bg-white rounded-lg shadow-xl">
                                        <div className="border-4 border-r-transparent w-[50px] h-[50px] rounded-full animate-spin"></div>
                                    </div>
                                }

                                {searchInput !== '' && animeData.length === 0 &&
                                    <div className="w-full flex items-center justify-center h-[500px] bg-white rounded-lg shadow-xl">
                                        <p className="font-bold textlg">No results found {':('}</p>
                                    </div>
                                }
                                
                                {animeData.length > 0 &&
                                    animeData.slice(0, 24).map((data) => (
                                        <Card key={data.mal_id} data={data} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}