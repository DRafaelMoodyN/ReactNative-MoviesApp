import { useEffect, useState } from "react"
import * as UseCase from "../../core/use-cases"
import { movieDBFetcher } from "../../config/adapters/http/movieDB.adapter"
import { FullMovie } from "../../core/entities/movie.entitie"
import { Cast } from "../../core/entities/cast.entity"

const useMovie = (moviId:number)=>{

     const[isLoading, setIsLoading] = useState(true)
     const [movie, setMovie] = useState<FullMovie>()
     const [cast, setCast] = useState<Cast[]>();

     const loadMovie = async ()=>{
        setIsLoading(true)
        const fullMoviePromise = await UseCase.getMovieByIdUseCase(movieDBFetcher, moviId)
        const castPromise = UseCase.getMovieCastUseCase(movieDBFetcher, moviId);

        const [fullMovie,cast] = await Promise.all([fullMoviePromise, castPromise])

        setMovie(fullMovie);
        setCast(cast)
        setIsLoading(false)
     }

     useEffect(()=>{
        loadMovie()
     },[moviId])

    return {
        isLoading,
        movie,
        cast
    }
}

export {
    useMovie,
    
}