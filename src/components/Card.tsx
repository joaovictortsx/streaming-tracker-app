export const Card = () => {
    return (
        <div className="flex flex-col mt-[15px] p-2 bg-white rounded-lg shadow-lg sm:w-[80%] md:w-[50%] lg:w-[30%] hover:shadow-2xl hover:duration-500">
            <div className="h-[60px] flex justify-center items-center text-black">
                <a href="" className="text-primary text-2xl font-bold hover:underline">One piece</a>
            </div>
            <div className="flex justify-between items-center h-[30px] text-black">
                <p className="text-lg ml-[25px]">Jul 4, 2025</p>
                <p className="text-lg mr-[25px]">12 eps, 24 min</p>
            </div>
            <div className="flex h-[40px] justify-around items-center">
                <a href="" className="bg-dark-white rounded-lg hover:underline">Action</a>
                <a href="" className="bg-dark-white rounded-lg hover:underline">Comedy</a>
                <a href="" className="bg-dark-white rounded-lg hover:underline">Supernatural</a>
            </div>
            <div className="flex justify-center items-start h-[400px] md:h-[350px] lg:h-[350px]">
                <div className="mt-[15px] overflow-hidden rounded-lg">
                    <img
                        className="w-full h-auto rounded-lg hover:scale-110 hover:duration-1000"
                        src="https://cdn.myanimelist.net/images/anime/1244/138851.jpg" />
                </div>
                <div className="flex flex-col mt-[15px] w-[50%] text-black">
                    <div className="h-[175px] pl-2 text-sm overflow-y-scroll break-words">
                        <p className="text-primary text-lg font-bold">Synopsis:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae voluptate recusandae praesentium a sunt animi, mollitia, ratione ullam quisquam aspernatur deserunt consequatur suscipit illum velit quas beatae facere? Nam.</p>
                    </div>
                    <div className="h-[175px] pl-2">
                        <p className="mt-[15px] text-sm">Studio: <a href="" className="text-primary hover:underline">Toei</a></p>
                        <p className="text-sm">Source: Manga</p>
                        <p className="text-sm">Demographic: <a href="" className="text-primary hover:underline">Shounen</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}