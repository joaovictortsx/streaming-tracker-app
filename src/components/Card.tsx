import { Anime } from "@/types/Anime"

type Props = {
    data: Anime
}

export const Card = ({ data }: Props) => {
    return (
        <div key={data.mal_id} className="flex flex-col items-center mt-[15px] p-2 bg-white rounded-lg shadow-lg md:w-[48%] lg:w-[30%] hover:shadow-2xl hover:duration-500">
            <div className="h-[60px] w-[80%] flex text-center justify-center items-center text-black">
                {data.title.length < 40 &&
                    <a href="" className="text-primary text-xl font-bold hover:underline">{data.title}</a>
                }
                {data.title.length >= 40 && data.title.length < 70 &&
                    <a href="" className="text-primary text-lg font-bold hover:underline">{data.title}</a>
                }
                {data.title.length >= 70 &&
                    <a href="" className="text-primary text-sm font-bold hover:underline">{data.title}</a>
                }
            </div>
            <div className="flex w-full justify-between items-center h-[30px] text-black">
                <p className="text-lg ml-[25px]">{data.aired.string.substring(0, 11)}</p>
                <p className="text-lg mr-[25px]">{data.episodes} eps, {data.duration.substring(0, 6)}</p>
            </div>
            <div className="flex h-[40px] w-full justify-around items-center">
                <div className="w-[33%] text-center">
                    <p className="bg-dark-white rounded-lg hover:underline cursor-pointer">{data.genres.length > 0 ? <a href="">{data.genres[0].name}</a> : '--'}</p>
                </div>
                <div className="w-[33%] text-center">
                    <p className="bg-dark-white rounded-lg hover:underline cursor-pointer">{data.genres.length > 1 ? <a href="">{data.genres[1].name}</a> : '--'}</p>
                </div>
                <div className="w-[33%] text-center">
                    <p className="bg-dark-white rounded-lg hover:underline cursor-pointer">{data.genres.length > 2 ? <a>{data.genres[2].name}</a> : '--'}</p>
                </div>
            </div>
            <div className="flex justify-center items-start h-[400px] md:h-[350px] lg:h-[350px]">
                <div className="mt-[15px] overflow-hidden rounded-lg">
                    <img
                        className="w-full h-auto rounded-lg hover:scale-110 hover:duration-1000"
                        src={data.images.jpg.image_url} />
                </div>
                <div className="flex flex-col mt-[15px] w-[50%] text-black">
                    <div className="h-[175px] pl-2 text-sm overflow-y-scroll break-words">
                        <p className="text-primary text-lg font-bold">Synopsis:</p>
                        <p>{data.synopsis}</p>
                    </div>
                    <div className="h-[175px] pl-2">
                        <p className="mt-[15px] text-sm">Studio: {data.studios.length > 0 ? <a href="" className="text-primary hover:underline"></a> : '--'}</p>
                        <p className="text-sm">Source: {data.source}</p>
                        <p className="text-sm">Demographic: {data.demographics.length > 0 ? <a href="" className="text-primary hover:underline">{data.demographics[0].name}</a> : '--'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}