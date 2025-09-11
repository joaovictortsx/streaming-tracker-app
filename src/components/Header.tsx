import logoImg from "../assets/img/bgImage.png"
import logoImg2 from '../assets/img/bgImage.png'
import avatarImg from "../assets/img/avatarImage.jpg"

type Props = {
    auth: boolean
}

export const Header = ({ auth }: Props) => {

    /* Function para abrir/fechar menu na versão mobile */
    const handleToggleMenu = (toggle: boolean) => {
        const mobileMenu = document.querySelector('#mobileMenu');

        if (mobileMenu && toggle) {
            mobileMenu.classList.remove('mt-[-700px]')
            mobileMenu.classList.add('mt-[550px]')
        } else {
            mobileMenu?.classList.remove('mt-[550px]')
            mobileMenu?.classList.add('mt-[-700px]')

        }
    }

    return (
        <header className="h-[80px] flex items-center justify-between">
            <div className="container flex justify-between items-center px-2 mx-auto lg:justify-normal">
                <div className="flex items-center justify-start w-[70%] h-[80px] lg:w-[33%]">
                    <div className="w-10 h-10 rounded-full mt-1 mr-1"><img src={logoImg.src} /></div>
                    <h1 className="text-xl font-bold">Streaming Tracker</h1>
                </div>
                <div className="w-[30%] h-[80px] flex items-center justify-end lg:justify-center lg:w-[33%]">

                    {/* Mobile menu */}
                    <button onClick={() => handleToggleMenu(true)} className="cursor-pointer text-xl lg:hidden">
                        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </button>

                    <div id="mobileMenu" className="p-2 absolute w-[400px] max-w-[calc(100vw-20px)] mt-[-700px] h-[600px] bg-white rounded-lg shadow-lg duration-1000 ease-in-out lg:hidden">
                        <div className="flex justify-between h-[40px]">
                            <img
                                className="w-10 h-10"
                                src={logoImg2.src} />
                            <button onClick={() => handleToggleMenu(false)} className="cursor-pointer text-2xl">
                                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                            </button>
                        </div>
                        <nav className="mt-[15px]">
                            <ul className="list-none flex flex-col items-start">
                                <a href="./"><li className="text-xl">Home</li></a>
                                <a href="./new"><li className="text-xl mt-2">News</li></a>
                                <a href="./trending"><li className="text-xl mt-2">Trendings</li></a>
                                <a href="./list"><li className="text-xl mt-2">My lists</li></a>
                            </ul>
                        </nav>
                    </div>

                    {/* Desktop menu */}
                    <nav className="hidden lg:flex">
                        <ul className="list-none flex justify-between w-[300px]">
                            <a href="./"><li className="border-b-2 border-transparent text-lg hover:border-primary">Home</li></a>
                            <a href="./new"><li className="border-b-2 border-transparent text-lg hover:border-primary">News</li></a>
                            <a href="./trending"><li className="border-b-2 border-transparent text-lg hover:border-primary">Trendings</li></a>
                            <a href="./list"><li className="border-b-2 border-transparent text-lg hover:border-primary">My lists</li></a>
                        </ul>
                    </nav>
                </div>
                <div className="w-[33%] h-[80px] items-center justify-end hidden lg:flex">
                    {!auth &&
                        <div className="w-[200px] h-[50px] flex justify-end items-center">
                            <button className="bg-primary text-white rounded-l-lg w-[80px] h-[40px] cursor-pointer hover:bg-primary/90">Sign in</button>
                            <button className="border-2 rounded-r-lg w-[80px] h-[40px] cursor-pointer hover:bg-gray-100">Sign up</button>
                        </div>
                    }
                    {auth &&
                        <div className="w-15 h-15 rounded-full border-2">
                            <img
                                className="w-full h-auto rounded-full cursor-pointer"
                                src={avatarImg.src} />
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}