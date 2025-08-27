import logoImg from "../assets/img/bgImage.png"
import avatarImg from "../assets/img/avatarImage.jpg"

export const Header = () => {
    return (
        <header className="h-[80px] flex items-center justify-between">
            <div className="container flex justify-between items-center px-2 mx-auto lg:justify-normal">
                <div className="flex items-center justify-start w-[70%] h-[80px] lg:w-[33%]">
                    <div className="w-10 h-10 rounded-full mt-1 mr-1"><img src={logoImg.src} /></div>
                    <h1 className="text-xl font-bold">Streaming Tracker</h1>
                </div>
                <div className="w-[30%] h-[80px] flex items-center justify-end lg:justify-center lg:w-[33%]">
                    {/* Mobile menu */}
                    <button className="rotate-90 cursor-pointer font-bold text-xl lg:hidden">|||</button>

                    {/* Desktop menu */}
                    <nav className="hidden lg:flex">
                        <ul className="list-none flex justify-between w-[300px]">
                            <a href=""><li className="border-b-2 border-transparent text-lg hover:border-primary">Home</li></a>
                            <a href=""><li className="border-b-2 border-transparent text-lg hover:border-primary">News</li></a>
                            <a href=""><li className="border-b-2 border-transparent text-lg hover:border-primary">Trendings</li></a>
                            <a href=""><li className="border-b-2 border-transparent text-lg hover:border-primary">My lists</li></a>
                        </ul>
                    </nav>
                </div>
                <div className="w-[33%] h-[80px] items-center justify-end hidden lg:flex">
                    <div className="w-15 h-15 rounded-full border-2">
                        <img 
                            className="w-full h-auto rounded-full cursor-pointer"
                            src={avatarImg.src}/>
                    </div>
                </div>
            </div>
        </header>
    )
}