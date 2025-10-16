import { useEffect, useState } from "react"
import { Header } from "./Header"
import { Anime } from "@/types/Anime"
import { getSingleAnime } from "@/data/jikanApi"


export const Info = () => {

    /* State que armazena os dados obtidos da requisição */
    const [animeData, setAnimeData] = useState<Anime>()
    const [toggleSynopsis, setToggleSynopsis] = useState<boolean>(false)


    {/* Function para aumentar/diminuir div da synopsis */ }
    const handleShowSynopsis = (toggle: boolean) => {
        const getElement = document.getElementById('synopsis')
        const getElement2 = document.getElementById('content')

        if (!toggleSynopsis && getElement && getElement2) {
            console.log('primeiro if')
            getElement.classList.remove('h-[150px]')
            getElement2.classList.remove('overflow-hidden')
            getElement2.classList.add('overflow-y-scroll')
            getElement.classList.add('h-[500px]')
            setToggleSynopsis(true)
        } else if (toggleSynopsis && getElement && getElement2) {
            console.log('segundo if')
            getElement.classList.remove('h-[500px]')
            getElement2.classList.remove('overflow-y-scroll')
            getElement2.classList.add('overflow-hidden')
            getElement.classList.add('h-[150px]')
            setToggleSynopsis(false)
        }
    }

    {/* Pegando id da url e fazendo requisição*/ }
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        if (id) {
            const getData = getSingleAnime(id);
            getData.then((res) => setAnimeData(res.data))
        }
    }, [])

    return (
        <section className="w-screen h-auto min-h-[100vh] text-primary">
            <div className="container mx-auto">
                <Header auth={true} />
                <div className="p-2 flex justify-center w-full">
                    <div className="flex flex-col w-full lg:hidden">
                        <div className="h-[80px] mt-[15px] w-full flex justify-center rounded-t-lg">
                            <div className="w-[75%] flex flex-col justify-center">
                                {/* Verificando length do title e ajustando o tamanho do texto de acordo */}
                                {animeData && animeData.title.length < 40 &&
                                    <>
                                        <h1 className="text-xl font-bold text-primary">{animeData?.title}</h1>
                                        <h1 className="text-lg text-secondary">{animeData?.title_english}</h1>
                                    </>
                                }
                                {animeData && animeData.title.length >= 40 && animeData.title.length < 70 &&
                                    <>
                                        <h1 className="text-lg font-bold text-primary">{animeData?.title}</h1>
                                        <h1 className="text-md text-secondary">{animeData?.title_english}</h1>
                                    </>
                                }
                                {animeData && animeData.title.length >= 70 &&
                                    <>
                                        <h1 className="text-sm font-bold text-primary">{animeData?.title}</h1>
                                        <h1 className="text-xs text-secondary">{animeData?.title_english}</h1>
                                    </>
                                }
                            </div>
                            <div className="w-[25%] mt-4">
                                <a href='' className="hover:underline font-bold">{'< voltar página'}</a>
                            </div>

                        </div>
                        <div className="flex w-full bg-white shadow-xl rounded-t-lg p-2">
                            <div className="w-[50%] overflow-hidden rounded-lg">
                                <img
                                    className="w-full rounded-lg h-auto hover:scale-110 hover:duration-1000 hover:ease-in-out"
                                    src={animeData?.images.jpg.image_url} />
                            </div>
                            <div className="w-[50%] p-2 text-black">
                                <div className="h-[25%]">
                                    <p className="text-lg"><span className="text-yellow-600 text-xl">☆ </span>9.99 <span className="text-sm text-gray-400">(999,999 users)</span></p>
                                    <p className="text-secondary text-sm">Ranked #{animeData?.rank}</p>
                                </div>
                                <div className="h-[25%]">
                                    <p>{animeData?.type} - {animeData?.episodes} eps</p>
                                    <p className="text-sm text-gray-400">Studios: </p>
                                    <p className="text-secondary text-lg">{animeData && animeData.studios.length > 0 ? <a href="" className="text-secondary hover:underline">{animeData.studios[0].name}</a> : '--'}</p>
                                </div>
                                <div className="h-[25%]">
                                    <p className="mt-[15px]">Genres: <a href="" className="text-secondary">1</a></p>
                                    <p className="">Source: <a href="" className="text-secondary">{animeData?.source}</a></p>
                                    <p className="">Demographic: {animeData && animeData.demographics.length > 0 ? <a href="" className="text-secondary hover:underline">{animeData.demographics[0].name}</a> : '--'}</p>
                                </div>
                            </div>
                        </div>
                        <div id="synopsis" className="w-full h-[200px] p-2 text-black shadow-xl overflow-hidden bg-white duration-1000 ease-in-out rounded-b-lg">
                            <div id="content" className="h-[90%] overflow-y-hidden">
                                <p className="text-primary mt-[20px] text-lg font-bold">Synopsis:</p>
                                <p>{animeData?.synopsis}</p>
                            </div>
                            <div className="h-[10%] mt-[5px] flex justify-center items-end">
                                <a onClick={() => handleShowSynopsis(toggleSynopsis)} className="text-secondary text-sm cursor-pointer hover:underline">See more {'>'}</a>
                            </div>
                        </div>
                        <div className="h-[320px] p-2 w-full mt-[25px] rounded-lg bg-white">
                            <div className="h-[40px] flex items-center justify-center w-full">
                                <p className="text-lg font-bold">Trailer</p>
                            </div>
                            <div className="w-full h-[260px]">
                                <iframe className="rounded-lg" width="100%" height="260" src={animeData?.trailer.embed_url} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}