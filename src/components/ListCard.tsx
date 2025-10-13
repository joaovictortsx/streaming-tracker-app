import { List } from "@/generated/prisma"

type Props = {
    data: List
}

export const ListCard = ({ data }: Props) => {
    return (
        <div className="flex items-center w-full h-[120px] mt-[10px] rounded-lg bg-white shadow-lg">
            <div className={`w-[20%] h-[97%] bg-cover bg-center rounded-l-lg bg-[url(${data.image})]`}>

            </div>
            <div className="w-[60%] text-black px-2">
                <h1>{data.title}</h1>
            </div>
            <div className="w-[20%]">
                <a href={`/info?id=${data.mal_id}`} className="border-2 text-lg bg-green-500 text-white rounded-lg px-3.5 py-1 cursor-pointer hover:bg-green-500/80">Details</a>
                <button className="border-2 text-lg bg-primary text-white rounded-lg px-2 mt-2 cursor-pointer hover:bg-primary/80">Remove</button>
            </div>
        </div>
    )
}