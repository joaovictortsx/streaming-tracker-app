import { useState } from "react"
import bgImage from "../assets/img/bgImage.png"
import { Header } from "./Header";

export const Login = () => {

    const [toggleForm, setToggleForm] = useState<boolean>(false);


    return (
        <section className="w-screen h-screen text-primary">
            <Header auth={true} />
            <div className="container mx-auto h-[calc(100vh-80px)] flex justify-center">
                {/* Info side */}
                <div className="hidden w-[50%] lg:flex">
                    <div className="w-full">
                        <img src={bgImage.src} />
                    </div>
                </div>

                {/* Form side */}
                {!toggleForm &&
                    <div className="flex w-full justify-center lg:w-[50%]">
                        <div className="w-[80%] h-[80%] mt-[50px] shadow-2xl bg-white rounded-lg lg:w-[50%]">
                            <div className="flex items-center justify-center h-[80px] mt-[50px]">
                                <button onClick={() => setToggleForm(false)} className="bg-primary text-white rounded-l-lg w-[100px] h-[50px] cursor-pointer hover:bg-primary/90">Sign in</button>
                                <button onClick={() => setToggleForm(true)} className="border-2 rounded-r-lg w-[100px] h-[50px] cursor-pointer hover:bg-gray-100">Sign up</button>
                            </div>
                            <div className="flex flex-col items-center h-[500px]">
                                <p className="text-xl mt-[15px] font-bold">Login</p>
                                <label className="mt-[45px] flex flex-col text-lg">
                                    Username:
                                    <input
                                        className="border border-primary rounded-lg px-3 py-2 mt-1 w-[250px] outline-0"
                                        type="text" name="" id="" placeholder="Type your Username" />
                                </label>
                                <label className="mt-[15px] flex flex-col text-lg">
                                    Password:
                                    <input
                                        className="border border-primary rounded-lg px-3 py-2 mt-1 w-[250px] outline-0"
                                        type="password" name="" id="" placeholder="Type your Username" />
                                </label>
                                <button className="bg-primary text-white rounded-lg mt-[25px] w-[100px] h-[50px] cursor-pointer hover:bg-primary/90">Login</button>
                            </div>
                        </div>
                    </div>
                }

                {toggleForm &&
                    <div className="flex w-full justify-center lg:w-[50%]">
                        <div className="w-[80%] h-[80%] mt-[50px] shadow-2xl bg-white rounded-lg lg:w-[50%]">
                            <div className="flex items-center justify-center h-[80px] mt-[50px]">
                                <button onClick={() => setToggleForm(false)} className="border-2 rounded-l-lg w-[100px] h-[50px] cursor-pointer hover:bg-gray-100">Sign in</button>
                                <button onClick={() => setToggleForm(true)} className="bg-primary text-white rounded-r-lg w-[100px] h-[50px] cursor-pointer hover:bg-primary/90">Sign up</button>
                            </div>
                            <div className="flex flex-col items-center h-[500px]">
                                <p className="text-xl mt-[15px] font-bold">Register</p>
                                <label className="mt-[50px] flex flex-col text-lg">
                                    Username:
                                    <input
                                        className="border border-primary rounded-lg px-3 py-2 mt-1 w-[250px] outline-0"
                                        type="text" name="" id="" placeholder="Type your Username" />
                                </label>
                                <label className="mt-[15px] flex flex-col text-lg">
                                    Email:
                                    <input
                                        className="border border-primary rounded-lg px-3 py-2 mt-1 w-[250px] outline-0"
                                        type="email" name="" id="" placeholder="Type your Email" />
                                </label>
                                <label className="mt-[15px] flex flex-col text-lg">
                                    Password:
                                    <input
                                        className="border border-primary rounded-lg px-3 py-2 mt-1 w-[250px] outline-0"
                                        type="password" name="" id="" placeholder="Type your Username" />
                                </label>
                                <button className="bg-primary text-white rounded-lg mt-[25px] w-[100px] h-[50px] cursor-pointer hover:bg-primary/90">Login</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}