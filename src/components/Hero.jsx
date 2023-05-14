import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";

const Hero = ({movie}) =>{

    const [movies, setMovies] = useState(null);

    useEffect(()=>{
        const set = movie.results[Math.floor(Math.random()* movie.results.length)];
        console.log(set)
        setMovies(set);
    }, [movie]);

console.log(movie.results[1])
    return(
        <div>
            <MovieDetails movie={movies}>

            </MovieDetails>
        </div>
    )
}

export default Hero;