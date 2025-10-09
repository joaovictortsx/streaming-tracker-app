import { useContext, useState } from "react";
import { Header } from "./Header";
import { Card } from "./Card";
import { ListContext } from "@/contexts/ListContext";
import { ListCard } from "./ListCard";

export const List = () => {

    //pegando dados do context
    const listCtx = useContext(ListContext);


    {/* State para alterar a aba de listas */ }
    const [toggleList, setToggleList] = useState<string>('favorite');

    return (
        <section className="w-screen h-auto min-h-[100vh] text-primary">
            <div className="container mx-auto">
                <Header auth={true} />
                <div className="p-2 flex justify-center w-full">
                    <div className="flex flex-col w-full ">
                        <div className="h-[40px] mt-[15px] w-full flex items-center">
                            <div className="w-1 h-6 bg-primary m-1"></div>
                            <h1 className="text-xl font-bold">My Lists</h1>
                        </div>
                        <div className="bg-white flex justify-center items-center w-full h-[80px] rounded-lg shadow-lg">
                            <nav className="w-[320px]">
                                <ul className="flex justify-between text-lg">
                                    <a onClick={() => setToggleList('favorite')} className="border-b-2 border-transparent text-lg hover:border-primary cursor-pointer"><li>Favorites</li></a>
                                    <a onClick={() => setToggleList('seeLater')} className="border-b-2 border-transparent text-lg hover:border-primary cursor-pointer"><li>See later</li></a>
                                    <a onClick={() => setToggleList('watched')} className="border-b-2 border-transparent text-lg hover:border-primary cursor-pointer"><li>Watched</li></a>
                                </ul>
                            </nav>
                        </div>
                        <div className="w-full flex justify-center lg:justify-start md:justify-start">
                            {/* Verificando qual lista foi clicada */}
                            {toggleList === 'favorite' &&
                                listCtx?.favoriteData.map(item => (
                                    <ListCard key={item.mal_id} data={item} />
                                ))
                            }
                            {toggleList === 'seeLater' &&
                                listCtx?.seeLaterData.map(item => (
                                    <ListCard key={item.mal_id} data={item} />
                                ))
                            }
                            {toggleList === 'watched' &&
                                listCtx?.watchedData.map(item => (
                                    <ListCard key={item.mal_id} data={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}