import logoImg from "../assets/img/bgImage.png"

export const Header = () => {
    return (
        <header className="h-[80px] flex items-center justify-between">
            <div className="container flex justify-between items-center px-2 mx-auto">
                <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full mt-1 mr-1"><img src={logoImg.src} /></div>
                    <h1 className="text-xl font-bold">Streaming Tracker</h1>
                </div>
                <div>
                    <button className="rotate-90 cursor-pointer font-bold text-xl lg:hidden">|||</button>
                </div>
            </div>
        </header>
    )
}