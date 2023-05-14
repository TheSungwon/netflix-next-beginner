import Image from "next/image";
import Navbar from "./Navbar";
import { baseUrl } from "../../utils/constant";
import { IoIosInformationCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const MovieDetails = ({ movie }) =>{
    console.log({movie})
    return(
        <>
        <Navbar />
        <div className="container">
            <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-[100vh]
            justify-center lg:pb-12">
                <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
                    <Image fill src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    className="object-cover" alt="movie poster"
                    />
                </div>

                <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                    {movie?.overview}
                </p>

                <div className="flex space-x-3">
                    <button className="bannerButton bg-white text-black">
                    <FaPlay />
                    Play

                    </button>
                    <button className="bannerButton bg-[gray]/100">
                    <IoIosInformationCircle />
                    More Info
                    </button>
                </div>
            </div>



            
        </div>
        </>
    )
}

export default MovieDetails;