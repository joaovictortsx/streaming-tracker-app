import { ListContext } from "@/contexts/ListContext"
import { getAll } from "@/data/listApi"
import { Anime } from "@/types/Anime"
import { List } from "@/types/List"
import { useContext, useEffect, useState } from "react"

type Props = {
    data: Anime & List
}

export const Card = ({ data }: Props) => {

    const listCtx = useContext(ListContext)
    const [actionsData, setActionsData] = useState<List[]>([]);

    useEffect(() => {
        const getActionsData = getAll()
        getActionsData.then((res) => setActionsData(res))
    }, [])

    return (
        <div key={data.mal_id} className="flex w-full flex-col items-center mt-[15px] p-2 bg-white rounded-lg shadow-lg md:w-[48%] lg:w-[30%] hover:shadow-2xl hover:duration-500">
            <div className="h-[60px] w-[80%] flex text-center justify-center items-center text-black">
                {/* Verificando length do title e ajustando o tamanho do texto de acordo */}
                {data.title.length < 40 &&
                    <a href={`/info?id=${data.mal_id}`} className="text-primary text-xl font-bold hover:underline">{data.title}</a>
                }
                {data.title.length >= 40 && data.title.length < 70 &&
                    <a href={`/info?id=${data.mal_id}`} className="text-primary text-lg font-bold hover:underline">{data.title}</a>
                }
                {data.title.length >= 70 &&
                    <a href={`/info?id=${data.mal_id}`} className="text-primary text-sm font-bold hover:underline">{data.title}</a>
                }
            </div>
            <div className="flex w-full justify-between items-center h-[30px] text-black">
                <p className="text-lg ml-[25px]">{data.aired.string.substring(0, 12)}</p>
                <p className="text-lg mr-[25px]">{data.episodes} eps, {data.duration.substring(0, 6)}</p>
            </div>
            <div className="flex h-[40px] w-full justify-around items-center">
                <div className="w-[33%] text-center">
                    <p className="bg-dark-white rounded-lg hover:underline cursor-pointer text-secondary">{data.genres.length > 0 ? <a href="">{data.genres[0].name}</a> : '--'}</p>
                </div>
                <div className="w-[33%] text-center">
                    <p className="bg-dark-white rounded-lg hover:underline cursor-pointer text-secondary">{data.genres.length > 1 ? <a href="">{data.genres[1].name}</a> : '--'}</p>
                </div>
                <div className="w-[33%] text-center">
                    <p className="bg-dark-white rounded-lg hover:underline cursor-pointer text-secondary">{data.genres.length > 2 ? <a>{data.genres[2].name}</a> : '--'}</p>
                </div>
            </div>
            <div className="flex w-full justify-center items-start h-[330px] md:h-[350px] lg:h-[330px]">
                <div className="mt-[15px] w-[50%] overflow-hidden rounded-lg">
                    <a href={`/info?id=${data.mal_id}`}>
                        <img
                            className="w-full h-auto max-h-[300px] rounded-lg hover:scale-110 hover:duration-1000"
                            src={data.images.jpg.image_url} />
                    </a>
                </div>
                <div className="flex flex-col mt-[15px] w-[50%] text-black">
                    <div className="h-[175px] pl-2 text-sm overflow-y-scroll break-words">
                        <p className="text-primary text-lg font-bold">Synopsis:</p>
                        <p>{data.synopsis}</p>
                    </div>
                    <div className="h-[175px] pl-2">
                        <p className="mt-[15px] text-sm">Studio: {data.studios.length > 0 ? <a href="" className="text-secondary hover:underline">{data.studios[0].name}</a> : '--'}</p>
                        <p className="text-sm">Source: {data.source}</p>
                        <p className="text-sm">Demographic: {data.demographics.length > 0 ? <a href="" className="text-secondary hover:underline">{data.demographics[0].name}</a> : '--'}</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-around">

                {//FAVORITE BTN ACTIONS
                    actionsData.filter((item) => item.mal_id === data.mal_id).length < 1 &&
                    <button onClick={() => listCtx?.handleBtnFavorite(data)} className="border-2 text-lg bg-primary text-white rounded-lg h-[60px] w-[150px] cursor-pointer hover:bg-primary/80">Mark Favorite</button>
                }
                {//FAVORITE BTN ACTIONS
                    actionsData.length > 0 &&
                    actionsData.filter((item) => item.mal_id === data.mal_id).map((item) => (
                        <button key={item.mal_id} onClick={() => listCtx?.handleBtnFavorite(item)} className="border-2 text-lg bg-primary text-white rounded-lg h-[60px] w-[150px] cursor-pointer hover:bg-primary/80">{item.favorite == true ? 'Unmark Favorite' : 'Mark Favorite'}</button>
                    ))
                }


                {//WATCHED BTN ACTIONS
                    actionsData.filter((item) => item.mal_id === data.mal_id).length < 1 &&
                    <button onClick={() => listCtx?.handleBtnWatched(data)} className="border-2 text-lg bg-black text-white rounded-lg h-[60px] w-[150px] cursor-pointer hover:bg-black/80">Mark Watched</button>
                }
                {//WATCHED BTN ACTIONS
                    actionsData.length > 0 &&
                    actionsData.filter((item) => item.mal_id === data.mal_id).map((item) => (
                        <button key={item.mal_id} onClick={() => listCtx?.handleBtnWatched(item)} className="border-2 text-lg bg-black text-white rounded-lg h-[60px] w-[150px] cursor-pointer hover:bg-black/80">{item.watched == true ? 'Unmark Watched' : 'Mark Watched'}</button>
                    ))
                }


                {//SEE LATER BTN ACTIONS
                    actionsData.filter((item) => item.mal_id === data.mal_id).length < 1 &&
                    <button onClick={() => listCtx?.handleBtnSeeLater(data)} className="border-2 text-lg bg-green-500 text-white rounded-lg h-[60px] w-[150px] cursor-pointer hover:bg-green-500/80">Mark See Later</button>
                }
                {//SEE LATER BTN ACTIONS
                    actionsData.length > 0 &&
                    actionsData.filter((item) => item.mal_id === data.mal_id).map((item) => (
                        <button key={item.mal_id} onClick={() => listCtx?.handleBtnSeeLater(item)} className="border-2 text-lg bg-green-500 text-white rounded-lg h-[60px] w-[150px] cursor-pointer hover:bg-green-500/80">{item.see_later == true ? 'Unmark See later' : 'Mark See later'}</button>
                    ))
                }
            </div>
        </div >
    )
}