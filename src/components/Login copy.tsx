import { useState } from "react"
import bgImage from "../assets/img/bgImage.png"

export const Login = () => {

    const [toggleForm, setToggleForm] = useState<boolean>(false);


    return (
        <div className="container h-[945px] mx-auto flex items-center lg:bg-red-500 md:bg-green-500 sm:bg-blue-500">

            {/* Info div */}
            <div className="w-[767px] h-[650px] flex items-center border-r-2 border-primary rounded-l-lg md:hidden sm:hidden">
                <div className="w-[767px] h-[600px] mr-[50px] rounded-lg">
                    <img
                        className="w-full h-auto rounded-l-lg"
                        src={bgImage.src} />
                </div>

            </div>

            {/* Login div */}
            <div className="w-[767px] h-[650px] flex items-center border-l-2 border-primary rounded-r-lg">
                <div className="w-[767px] h-[600px]">
                    {toggleForm &&
                        <div className="flex flex-col items-center w-[750px] h-[600px] rounded-lg ml-[50px]">
                            <div className="flex justify-center items-center w-[500px] h-[80px]  mt-[25px]">
                                <button onClick={() => setToggleForm(false)} className="text-lg text-primary w-[100px] h-[50px] rounded-l-lg border border-primary cursor-pointer hover:bg-dark-white/90">Login</button>
                                <button onClick={() => setToggleForm(true)} className="text-lg text-white bg-primary w-[100px] h-[50px] rounded-r-lg cursor-pointer hover:bg-primary/90">Register</button>
                            </div>
                            <div className="flex flex-col items-center mt-[50x] w-[500px] h-[400px]">
                                <label className="text-primary flex flex-col mt-[25px]">
                                    Username:
                                    <input
                                        className="w-[250px] h-[40px] px-2 border border-primary rounded-lg outline-0 text-black placeholder:text-primary placeholder:text-sm"
                                        type="text" name="" id="" placeholder="Type your Username" required/>
                                </label>
                                <label className="text-primary flex flex-col mt-[15px]">
                                    Email:
                                    <input
                                        className="w-[250px] h-[40px] px-2 border border-primary rounded-lg outline-0 text-black placeholder:text-primary placeholder:text-sm"
                                        type="email" name="" id="" placeholder="Type your Password" required/>
                                </label>
                                <label className="text-primary flex flex-col mt-[15px]">
                                    Password:
                                    <input
                                        className="w-[250px] h-[40px] px-2 border border-primary rounded-lg outline-0 text-black placeholder:text-primary placeholder:text-sm"
                                        type="password" name="" id="" placeholder="Type your Password" required/>
                                </label>
                                <button className="text-lg text-white w-[150px] h-[50px] mt-[25px] rounded-lg bg-primary cursor-pointer hover:bg-primary/90">Sign up</button>
                            </div>
                        </div>
                    }
                    {!toggleForm &&
                        <div className="flex flex-col items-center w-[750px] h-[600px] rounded-lg ml-[50px]">
                            <div className="flex justify-center items-center w-[500px] h-[80px]  mt-[25px]">
                                <button onClick={() => setToggleForm(false)} className="text-lg text-white w-[100px] h-[50px] rounded-l-lg bg-primary cursor-pointer hover:bg-primary/90">Login</button>
                                <button onClick={() => setToggleForm(true)} className="text-lg text-primary w-[100px] h-[50px] rounded-r-lg border border-primary cursor-pointer hover:bg-dark-white/90">Register</button>
                            </div>
                            <div className="flex flex-col items-center mt-[50x] w-[500px] h-[300px]">
                                <label className="text-primary flex flex-col mt-[25px]">
                                    Username:
                                    <input
                                        className="w-[250px] h-[40px] px-2 border border-primary rounded-lg outline-0 text-black placeholder:text-primary placeholder:text-sm"
                                        type="text" name="" id="" placeholder="Type your Username" required/>
                                </label>
                                <label className="text-primary flex flex-col mt-[15px]">
                                    Password:
                                    <input
                                        className="w-[250px] h-[40px] px-2 border border-primary rounded-lg outline-0 text-black placeholder:text-primary placeholder:text-sm"
                                        type="password" name="" id="" placeholder="Type your Password" required/>
                                </label>
                                <button className="text-lg text-white w-[150px] h-[50px] mt-[25px] rounded-lg bg-primary cursor-pointer hover:bg-primary/90">Sign in</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}