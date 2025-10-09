import { List } from "@/generated/prisma"

type Props = {
    data: List
}

export const ListCard = ({data}: Props) => {
    return(
        <div className="flex items-center w-full h-[120px] mt-[10px] rounded-lg bg-white shadow-lg">
            <div className="w-[20%] h-[97%] bg-cover bg-center rounded-l-lg bg-[url(https://cdn.myanimelist.net/images/anime/4/19644.jpg)]">
            </div>
            <div className="w-[60%] flex flex-col text-black px-2">
                <h1>teste</h1>
                <p>teste</p>
            </div>
            <div className="w-[20%]">
                <button className="border-2 text-lg bg-green-500 text-white rounded-lg h-[35px] w-[90px] cursor-pointer hover:bg-green-500/80">Details</button>
                <button className="border-2 text-lg bg-primary text-white rounded-lg h-[35px] w-[90px] cursor-pointer hover:bg-primary/80">Remove</button>
            </div>
        </div>
    )
}