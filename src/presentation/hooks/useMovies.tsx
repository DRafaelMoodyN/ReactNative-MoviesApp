import { useEffect, useState } from "react"
import type { IMovie } from "../../core/entities/movie.entitie"
import * as UseCase from "../../core/use-cases"
import { movieDBFetcher } from "../../config/adapters/http/movieDB.adapter"

let popularPage = 1

const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<IMovie[]>([])
    const [popular, setPopular] = useState<IMovie[]>([]);
    const [topRated, setTopRated] = useState<IMovie[]>([]);
    const [upcoming, setUpcoming] = useState<IMovie[]>([]);

    useEffect(() => {
        initialLoad()
    }, [])

    const initialLoad = async () => {
        const nowPlayingPromise = UseCase.moviesNowPlayingUseCase(movieDBFetcher)
        const popularPromise = UseCase.moviesPopularUseCase(movieDBFetcher)
        const topRatedPromise = UseCase.moviesTopRatedUseCase(movieDBFetcher);
        const upcomingPromise = UseCase.moviesUpcomingUseCase(movieDBFetcher);

        const [nowPlayingMovies, popularMovies,  
            topRatedMovies,
            upcomingMovies,] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ])

        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setTopRated( topRatedMovies );
        setUpcoming( upcomingMovies );

        setIsLoading(false)
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,

        //
        popularNextPage: async()=>{
            popularPage++;
            const popularMovies = await UseCase.moviesPopularUseCase(movieDBFetcher, {
                page:popularPage
            })
            setPopular(pre =>[...pre, ...popularMovies])
        }
    }
}

export {
    useMovies
}