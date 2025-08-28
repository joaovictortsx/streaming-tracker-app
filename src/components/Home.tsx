import { Header } from "./Header"
import bgImage from "../assets/img/bgImage.png"

export const Home = () => {
    return (
        <section className="w-screen h-screen text-primary">
            <Header auth={false} />
            <div className="container mx-auto h-[calc(100vh-80px)] flex">
                <div className="w-full flex justify-center text-center lg:w-[45%]">
                    <div className="flex flex-col justify-center items-center w-[80%] h-[80%] mt-[50px] shadow-2xl bg-white rounded-lg lg:w-[90%] lg:h-[60%]">
                        <h1 className="text-2xl font-bold lg:text-4xl">Track your <br /> Favorites Streamings Shows</h1>
                        <p className="text-lg mt-[15px] lg:text-xl">Make favorites list, watched list, find new show release, trending tops and more</p>
                        <button className="mt-[15px] bg-primary text-white w-[90px] h-[45px] rounded-lg cursor-pointer hover:bg-primary/90 lg:w-[100px] lg:h-[50px]">Start now</button>
                    </div>
                </div>
                <div className="hidden w-[55%] lg:flex">
                    <img
                        className="w-full"
                        src={bgImage.src} />
                </div>
            </div>
        </section>
    )
}