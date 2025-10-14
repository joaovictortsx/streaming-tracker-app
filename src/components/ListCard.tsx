import { ListContext } from "@/contexts/ListContext"
import { List } from "@/types/List"
import { useContext, useEffect } from "react"

type Props = {
    list: string
    data: List
}

export const ListCard = ({ list, data }: Props) => {

    const listCtx = useContext(ListContext)
    console.log(list)

    return (
        <div className="flex items-center w-full h-[120px] mt-[10px] rounded-lg bg-white shadow-lg">
            <div className="w-[20%] h-[97%] overflow-hidden rounded-l-lg">
                <img src={data.image} />
            </div>
            <div className="w-[60%] text-black px-2">
                <h1>{data.title}</h1>
                <p className="text-sm text-gray-400">Your notes:</p>
                <p className="text-sm text-gray-400">notes will be release soon</p>
            </div>
            <div className="w-[20%]">
                <a href={`/info?id=${data.mal_id}`} className="border-2 text-lg bg-green-500 text-white rounded-lg px-3.5 py-1 cursor-pointer hover:bg-green-500/80">Details</a>
                {list == 'favorite' &&
                    <button onClick={() => listCtx?.removeFromList(list, data)} className="border-2 text-lg bg-primary text-white rounded-lg px-2 mt-2 cursor-pointer hover:bg-primary/80">Remove</button>
                }
                {list == 'watched' &&
                    <button onClick={() => listCtx?.removeFromList(list, data)} className="border-2 text-lg bg-primary text-white rounded-lg px-2 mt-2 cursor-pointer hover:bg-primary/80">Remove</button>
                }
                {list == 'seeLater' &&
                    <button onClick={() => listCtx?.removeFromList(list, data)} className="border-2 text-lg bg-primary text-white rounded-lg px-2 mt-2 cursor-pointer hover:bg-primary/80">Remove</button>
                }
        </div>
        </div >
    )
}